module.exports = function (grunt) {
  grunt.initConfig({
    cfg: grunt.file.readJSON('config.json'),
    pkg: grunt.file.readJSON('package.json'),

    bootlint: {
      options: {
        stoponerror: false,
        relaxerror: [
          'W001',
          'W002',
          'W003',
          'W005',
          'W009',

          'E001',
        ],
      },
      files: ['app/partials/*.html', 'app/index.html', 'app/scripts/directives/**/*.html', 'app/scripts/modules/**/*.html'],
    },

    clean: {
      build: ['build'],
      coverage: ['reports/coverage'],
      dist: ['dist'],
      reports: ['reports']
    },

    copy: {
      build: {
        files: [
          { src: 'app/index.html', dest: 'build/index.html' }
        ]
      },
      dist: {
        files: [
          { src: ['build/index.html'], dest: 'dist/index.html' },
          { src: ['app/robots.txt'], dest: 'dist/robots.txt' },
          { cwd: 'app/images', src: ['*'], dest: 'dist/images/', expand: true },
          { cwd: 'app/fonts', src: ['**/*.{ttf,otf,woff}'], dest: 'dist/fonts/', expand: true },
          { cwd: 'app/i18n', src: ['*.json'], dest: 'dist/i18n/', expand: true }
        ]
      }
    },

    connect: {
      options: {
        hostname: '<%= cfg.server.hostname %>',
        port: '<%= cfg.server.port %>',
        middleware: function (connect, options) {
          return [
            require('grunt-connect-proxy/lib/utils').proxyRequest,
            connect.static(options.base)
          ];
        }
      },
      proxies: [{
        context: ['/api', '/api-docs', '/api-ui'],
        host: '<%= cfg.proxy.host %>',
        port: '<%= cfg.proxy.port %>',
        https: false,
        changeOrigin: true,
        xforward: true,
        headers: {
          'Host': 'localhost'
        }
      }],
      dev: {
        options: {
          base: 'app',
          debug: true
        }
      },
      dist: {
        options: {
          base: 'dist',
          debug: false
        }
      }
    },

    csslint: {
      options: {
        'adjoining-classes': false,
        'box-model': false,
        'box-sizing': false,
        'floats': false,
        'font-sizes': false,
        'important': false,
        'known-properties': false,
        'overqualified-elements': false,
        'qualified-headings': false,
        'regex-selectors': false,
        'unique-headings': false,
        'universal-selector': false,
        'unqualified-attributes': false,

        'ids': false,
        'compatible-vendor-prefixes': false,
        'fallback-colors': false,
        'zero-units': false
      },
      all: {
        src: ['app/styles/**/*.css']
      }
    },

    ngtemplates: {
      options: {
        module: 'gamular',
        url: function (path) {
          var chunks = path.split('/');
          chunks.shift();
          return chunks.join('/');
        },
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true, // Only if you don't use comment directives!
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      dev: {
        src: ['app/partials/*.html', 'app/scripts/**/*.html'],
        dest: 'app/scripts/templates.js'
      }
    },

    jshint: {
      options: {
        jshintrc: true,
        ignores: ['**/*.spec.js', 'app/scripts/vendor/**/*.js', 'app/scripts/templates.js']
      },
      all: {
        files: {
          src: [
            'app/scripts/**/*.js'
          ]
        }
      }
    },

    jsonlint: {
      config: {
        src: ['config.json']
      },
      i18n: {
        src: ['app/i18n/*.json']
      }
    },

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      dev: {
        singleRun: false,
        reporters: ['dots', 'coverage']
      },
      spec: {
        singleRun: false,
        reporters: ['spec']
      },
      unit: {
        singleRun: true,
        reporters: ['spec', 'coverage']
      },
      ci: {
        singleRun: true,
        reporters: ['tap', 'coverage']
      }
    },

    useminPrepare: {
      html: 'build/index.html',
      options: {
        staging: 'build',
        dest: 'dist'
      }
    },

    usemin: {
      html: 'build/index.html'
    },

    watch: {
      options: { livereload: true },
      app: {
        files: [
          'i18n/*.json',
          'app/**/*.js',
          '!app/**/*.spec.js'
        ],
        tasks: ['jsonlint', 'jshint']
      },
      css: {
        files: ['app/styles/*.css'],
        tasks: ['csslint']
      },
      partials: {
        files: ['app/**/*.html'],
        tasks: ['ngtemplates']
      },
    }
  });

  // Load NPM tasks 
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-bootlint');


  grunt.registerTask('--- custom tasks ---', '--- custom tasks ---', []);
  // Run task(s).
  grunt.registerTask('default', '[dev] Launch the server with livereload', [
    'lint',
    'ngtemplates',
    'configureProxies',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('dist', '[prod] Launch the server in production environment', [
    'lint',
    'configureProxies',
    'connect:dist'
  ]);

  // Test task.
  grunt.registerTask('ci', '[jenkins] Continuous Integration. Jenkins to invoke this command upon "git push"', [
    'ngtemplates',
    'karma:ci'
  ]);

  grunt.registerTask('test', 'Run tests once and exit', [
    'clean:coverage',
    'lint',
    'karma:unit'
  ]);

  // Lint task(s).
  grunt.registerTask('lint', 'Make sure all files are beautiful', [
    'jsonlint',
    'jshint',
    'csslint'
  ]);

  // Build task(s).
  grunt.registerTask('build', '...', [
    'lint',
    'ngtemplates',
    'clean:build',
    'clean:dist',
    'copy:build',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'usemin',
    'copy:dist'
  ]);

  //Review task(s).
  grunt.registerTask('review', 'Run lint tool, unit tests + reports, build and launch the server (prod)', [
    'jshint',
    'clean:coverage',
    'karma:unit',
    'plato',
    'build',
    'dist'
  ]);
};

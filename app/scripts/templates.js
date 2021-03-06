angular.module('gamular').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partials/controls.html',
    "<div class=directions><div class=btn-center><btn-move direction=up player=player><i class=\"fa fa-chevron-up\"></i></btn-move></div><div class=btn-group><btn-move direction=left player=player><i class=\"fa fa-chevron-left\"></i></btn-move><btn-move direction=right player=player><i class=\"fa fa-chevron-right\"></i></btn-move></div><div class=btn-center><btn-move direction=down player=player><i class=\"fa fa-chevron-down\"></i></btn-move></div></div><div class=actions><div></div><div><btn-attack player=player monster=monster><i class=\"fa fa-flash\"></i> Attack</btn-attack></div><div></div></div>"
  );


  $templateCache.put('partials/debug.html',
    "<div class=player><pre>{{player | json}}</pre></div><div class=monster><pre>{{monster | json}}</pre></div>"
  );


  $templateCache.put('partials/map.html',
    "<div ng-controller=\"mapCtrl as map\" class=\"tiles container\"><div ng-repeat=\"row in [0,1,2,3,4,5]\" class=row><div ng-repeat=\"col in [0,1,2,3,4,5]\" ng-class=\"['x-'+row, 'y-'+col]\" class=\"col-xs-2 tile\" ng-click=\"map.setTarget(col, row)\"></div></div></div><gu-sprite sprite=player model=player></gu-sprite><gu-sprite sprite=monster model=monster></gu-sprite>"
  );


  $templateCache.put('partials/nav.html',
    "<nav ng-controller=\"navCtrl as nav\" class=\"navbar navbar-default navbar-fixed-top\" role=navigation><div class=container><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#navbar><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href ng-click=homePage()><i class=\"fa fa-th-large fa-fw\"></i> {{gamular.name}}</a></div><div id=navbar class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav\"><li><a href ng-click=nav.startGame()>Start game</a></li></ul></div></div></nav>"
  );


  $templateCache.put('scripts/directives/btn-attack/template.html',
    "<button ng-click=\"ctrl.attack(player, monster)\" type=button class=\"btn btn-primary\"><ng-transclude></ng-transclude></button>"
  );


  $templateCache.put('scripts/directives/btn-move/template.html',
    "<button type=button class=\"btn btn-default\"><ng-transclude></ng-transclude></button>"
  );


  $templateCache.put('scripts/directives/gu-sprite/template.html',
    "<div class=\"sprite text-center\"><i ng-show=\"sprite === 'player'\" class=\"fa fa-2x fa-child\"></i> <i ng-show=\"sprite === 'monster'\" class=\"fa fa-2x fa-bug\"></i></div><progressbar value=model.life max=model.maxLife type=danger>{{model.life}} / {{model.maxLife}}</progressbar>"
  );


  $templateCache.put('scripts/nav/create-monster/template.html',
    "<div class=modal-header>Monster life</div><div class=modal-body><div class=form-group><input ng-model=monster.life type=number class=form-control placeholder=\"Monster Life...\"></div></div><div class=modal-footer><button ng-click=$dismiss() type=button class=\"btn btn-default\">Cancel</button> <button ng-click=$close(monster) type=button class=\"btn btn-primary\">Create</button></div>"
  );


  $templateCache.put('scripts/nav/create-player/template.html',
    "<div class=modal-header>Player name</div><div class=modal-body><div class=form-group><input ng-model=player.name class=form-control placeholder=\"Bob the hero\"></div></div><div class=modal-footer><button ng-click=$dismiss() type=button class=\"btn btn-default\">Cancel</button> <button ng-click=$close(player) type=button class=\"btn btn-primary\">Create</button></div>"
  );

}]);

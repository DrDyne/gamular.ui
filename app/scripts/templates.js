angular.module('gamular').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partials/controls.html',
    "<div class=directions><div class=btn-center><btn-move direction=up player=player><i class=\"fa fa-chevron-up\"></i></btn-move></div><div class=btn-group><btn-move direction=left player=player><i class=\"fa fa-chevron-left\"></i></btn-move><btn-move direction=right player=player><i class=\"fa fa-chevron-right\"></i></btn-move></div><div class=btn-center><btn-move direction=down player=player><i class=\"fa fa-chevron-down\"></i></btn-move></div></div><div class=actions><div></div><div><btn-attack player=player monster=monster><i class=\"fa fa-flash\"></i> Attack</btn-attack></div><div></div></div>"
  );


  $templateCache.put('partials/map.html',
    "<div class=\"tiles container\"><div ng-repeat=\"row in [0,1,2,3,4,5]\" class=row><div ng-repeat=\"col in [0,1,2,3,4,5]\" ng-class=\"['x-'+row, 'y-'+col]\" class=\"col-md-2 tile\"></div></div></div>"
  );


  $templateCache.put('partials/nav.html',
    "<nav ng-controller=\"navCtrl as nav\" class=\"navbar navbar-default navbar-fixed-top\" role=navigation><div class=container><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#navbar><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href ng-click=homePage()><i class=\"fa fa-th-large fa-fw\"></i> {{gamular.name}}</a></div><div id=navbar class=\"pup-nav navbar-collapse collapse\"><ul class=\"nav navbar-nav\"><li><a href ng-click=nav.startGame()>Start game</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown nav-sep\"><a href class=dropdown-toggle data-toggle=dropdown>{{session.email}} <span class=caret></span></a><ul class=dropdown-menu role=menu><li class=disabled><a href=#/settings><i class=\"fa fa-ban fa-fw\"></i> Settings</a></li><li><a href=#/logout><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a></li></ul></li></ul></div></div></nav>"
  );


  $templateCache.put('scripts/directives/btn-attack/template.html',
    "<button attack type=button class=\"btn btn-primary\"><ng-transclude></ng-transclude></button>"
  );


  $templateCache.put('scripts/directives/btn-move/template.html',
    "<button type=button class=\"btn btn-default\"><ng-transclude></ng-transclude></button>"
  );


  $templateCache.put('scripts/nav/create-monster/template.html',
    "<div class=modal-header>Monster life</div><div class=modal-body><div class=form-group><input ng-model=monster.life type=number class=form-control placeholder=\"Monster Life...\"></div></div><div class=modal-footer><button ng-click=$dismiss() type=button class=\"btn btn-default\">Cancel</button> <button ng-click=$close(monster) type=button class=\"btn btn-primary\">Create</button></div>"
  );


  $templateCache.put('scripts/nav/create-player/template.html',
    "<div class=modal-header>Player name</div><div class=modal-body><div class=form-group><input ng-model=player.name class=form-control placeholder=\"Bob the hero\"></div></div><div class=modal-footer><button ng-click=$dismiss() type=button class=\"btn btn-default\">Cancel</button> <button ng-click=$close(player) type=button class=\"btn btn-primary\">Create</button></div>"
  );

}]);

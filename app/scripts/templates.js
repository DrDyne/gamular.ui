angular.module('gamular').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partials/controls.html',
    "<button move direction=up player=player type=button class=\"btn btn-default btn-up\"><i class=fa></i> Up</button> <button move direction=left player=player type=button class=\"btn btn-default btn-left\"><i class=fa></i> Left</button> <button move direction=right player=player type=button class=\"btn btn-default btn-right\"><i class=fa></i> Right</button> <button move direction=down player=player type=button class=\"btn btn-default btn-down\"><i class=fa></i> Down</button>"
  );


  $templateCache.put('partials/map.html',
    "<div>map goes here</div>"
  );


  $templateCache.put('partials/nav.html',
    "<div class=container><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#navbar><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href ng-click=homePage()><i class=\"fa fa-th-large fa-fw\"></i> {{gamular.name}}</a></div><div id=navbar class=\"pup-nav navbar-collapse collapse\"><ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown nav-sep\"><a href class=dropdown-toggle data-toggle=dropdown>{{session.email}} <span class=caret></span></a><ul class=dropdown-menu role=menu><li class=disabled><a href=#/settings><i class=\"fa fa-ban fa-fw\"></i> Settings</a></li><li><a href=#/logout><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a></li></ul></li></ul></div></div>"
  );

}]);

angular.module('deskItems', []).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/items', {templateUrl: 'partials/item-list.html', controller: DeskListCtrl}).
			when('/items/:itemId', {templateUrl: 'partials/item-detail.html', controller: DeskDetailCtrl}).
			otherwise({redirectTo: '/items'});
	}]);
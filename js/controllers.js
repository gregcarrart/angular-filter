function DeskListCtrl ($scope, $http) {
 	$http.get('deskitems.json').success(function (data) {
 		$scope.items = data.items;
 		$scope.sortProp = 'age';
 	});
}

function DeskDetailCtrl ($scope, $routeParams, $http) {
 	$http.get('items/' + $routeParams.itemId + '.json').success(function (data) {
 		$scope.item = data;
 		console.log(data.img);
 	});
}
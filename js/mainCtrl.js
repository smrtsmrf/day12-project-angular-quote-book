angular.module('quoteBook').controller('mainCtrl', function ($scope, dataService) {
	$scope.quotes = dataService.getData();
	$scope.add = function(data) {
		dataService.addData(data);
		$scope.Input = '';
	};
	$scope.remove = function(text) {
		dataService.removeData(text);
	}
})

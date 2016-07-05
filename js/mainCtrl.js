angular.module('quoteBook').controller('mainCtrl', function ($scope, dataService) {
	
	$scope.shown = false;

	$scope.quotes = dataService.getData();
	$scope.add = function(data) {
		dataService.addData(data);
		$scope.Input = '';
	};
	$scope.remove = function(text) {
		dataService.removeData(text);
	}

})

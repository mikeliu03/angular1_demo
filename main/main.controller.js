//http://www.hnjst.gov.cn/index.htm
angular.module('myApp', []).controller('myCtrl', function($scope, $location){
	$scope.name = "aa";
	$scope.say = function(){
		console.log($location)
	}
});
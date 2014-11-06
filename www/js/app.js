var App = angular.module("App", ["ionic"]);

App.service("FreshlyPressed", ["$http","$log",FreshlyPressed]);

App.controller("AppCtrl",["$scope","FreshlyPressed","$log",AppCtrl]);

function AppCtrl($scope,FreshlyPressed,$log){
	$scope.post=[];

	$scope.refresh=function(){
     FreshlyPressed.getBlogs($scope);
	}
}

function FreshlyPressed($http, $log){
	this.getBlogs=function($scope) {
		$http.jsonp("https://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK")
		.success(function(result){
		    $log.info(JSON.stringify(result.posts));	
			$scope.posts=result.posts;
			$scope.$broadcast("scroll.refreshcomplete");
		});

	};
}


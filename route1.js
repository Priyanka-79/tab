var app = angular.module('myApp1',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:"tab1a.html"
	})
	.when('/tab2',{
		templateUrl:"tab2.html"
	})
	.when('/tab3',{
		templateUrl:"tab3.html"
	})
});

app.controller("mythird", function($scope) {
    $scope.addItem = function () {
        $scope.item.push($scope.add);
        $scope.add="";
    }   
     $scope.removeItem = function (x) {
        $scope.item.splice(x, 1);
    }  
});
app.controller("mysecond", function($scope) {
	$scope.name = "Thumbnails",
    $scope.img =[
	    {"src":"images/image1.jpg", "alt":"image1"},
	    {"src":"images/image2.jpg", "alt":"image2"},
	    {"src":"images/image3.jpg", "alt":"image3"},
	    {"src":"images/image4.jpg", "alt":"image4"},
	    {"src":"images/image5.jpg", "alt":"image5"},
	  ];
	  $scope.clickimage=function(){
	  $scope.image=(this.x.src).trim();
}       
});
app.controller('myfirst', function($scope) {
    
    $scope.names = [
   
        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg",
        "video1.mp4",
        "video2.mp4",
        "text1.txt"
    ]});

/**
 * Created by özge on 2/20/2016.
 */
var app = angular.module('myApp', [])
console.log("buarafa")
app.controller('FormCtrl', function ($scope, $http) {

    $scope.data = {
        firstname: "default",
        emailaddress: "default",
        attitude: 0,
        longitude: 0,

    };
    $scope.submitForm = function() {
        console.log("posting data....");
        $http.post('http://posttestserver.com/post.php?dir=jsfiddle', JSON.stringify(data)).success(function(){/*success callback*/});
    };
});
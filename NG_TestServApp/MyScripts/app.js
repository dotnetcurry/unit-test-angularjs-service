var app = angular.module('mdl', []);
/// <reference path="mymodule.js" />
app.service('myserv', function ($http) {

    this.getData = function () {
        var result = $http.get("http://localhost:36337/api/EmployeeInfoAPI");
        return result; //deferrer
    };

    this.get = function (id) {
        var result = $http.get("http://localhost:36337/api/EmployeeInfoAPI/" + id);
        return result; //deferrer
    };

     
});
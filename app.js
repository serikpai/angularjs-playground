var foo = {}

var app = angular
    .module('TodoApp', ['ngRoute', 'ngMessages'])
    .config(['$routeProvider', (router) => {
        router.when('/', {
            controller: "TodoCtrl",
            templateUrl: "controller/todo-list/todo-list.tpl.html"
        });
    }]);

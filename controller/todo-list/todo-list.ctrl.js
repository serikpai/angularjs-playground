
foo.TodoCtrl = function ($scope) {
    $scope.greet = "Fancy Todos"

    $scope.value1 = "Hello"
    $scope.value2 = "World"


    $scope.items = [
        { title: 'first item', content: 'my first todo' },
        { title: 'second item', content: 'my second todo' },
        { title: 'third item', content: 'my third todo', email: 'user@example.com' },
    ]

    $scope.createNewItem = () => {

        $scope.items.push({
            title: $scope.title,
            content: $scope.content,
            email: $scope.email
        })

        $scope.title = $scope.content = $scope.email = ''
    }
}

app.controller('TodoCtrl', ['$scope', foo.TodoCtrl]);
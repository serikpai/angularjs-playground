foo.TodoCardCtrl = () => {
    const ctrl = this
}

app.component('fooTodoCard', {
    templateUrl: './components/todo-card/todo-card.tpl.html',
    bindings: {
        item: '<'
    },
    controller: foo.TodoCardCtrl
})



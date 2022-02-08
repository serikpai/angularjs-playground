foo.InputTextCtrl = () => {
    var ctrl = this;
}

app.component('fooInputText', {
    templateUrl: './components/input-text/input-text.tpl.html',
    controller: foo.InputTextCtrl,
    bindings: {
        id: '@',
        model: '=ngModel',
        label: '@',
    }
})
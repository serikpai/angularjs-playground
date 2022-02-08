
foo.EmailValidation = (email) => {
    if (!email) {
        return false
    }

    return /\S+@\S+\.\S+/.test(email)
}

app.directive('fooEmail', () => {
    return {
        require: 'ngModel',
        link: (_, __, ___, model) => {
            model.$validators.isFormatCorrect = foo.EmailValidation
        }
    }
})

app.directive('fooOne', () => {
    return {
        scope: {
            atest: '='
        },
        require: 'ngModel',
        link: (scope, _, __, model) => {
            const foo = scope.test;

            model.$validators.match1 = (value) => {
                console.log(foo);

                return foo == value
            }
        }
    }
});
app.directive('fooTwo', () => {
    return {
        scope: {
            btest: '='
        },
        require: 'ngModel',
        link: (scope, _, __, model) => {

            model.$validators.match2 = (value) => {
                var foo = scope.test;

                console.log(foo);

                return foo == value
            }
        }
    }
});
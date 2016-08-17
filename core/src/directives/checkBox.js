function checkBox() {
    return {
        require: 'ngModel',
        restrict: 'E',
        templateUrl: 'checkbox-template.html',
        replace: true,
        scope: {
            ngModel: '=',
            title: '@'
        },
        link: function (scope, element, attrs) {
            scope.change = ()=> {
                scope.ngModel = !scope.ngModel;
            }
        }
    };
}

export default checkBox;
function button() {
    return {
        restrict: 'E',
        templateUrl: 'button-template.html',
        replace: true,
        scope: {
            isWaiting: '=',
            icon: '@',
            styleType: '@',
            title: '@'
        },
        link: function (scope, element, attrs) {

        }
    };
}

export default button;
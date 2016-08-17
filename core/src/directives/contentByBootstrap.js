function contentByBootstrap() {
    return {
        restrict: 'E',
        templateUrl: 'content-template.html',
        transclude: true,
        scope: {},
        link: function (scope, element, attrs) {
            scope.title = attrs.title;
        }
    };
}

export default contentByBootstrap;
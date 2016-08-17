
function textEditorByKendoEditor(){
    return {
        restrict: 'E',
        replace: true,
        template: '<textarea kendo-editor k-ng-model="ngModel"></textarea>',
        link: function (scope, element, attrs) {

        }
    };
}

export default textEditorByKendoEditor;
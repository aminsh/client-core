
function ComboByKendoCombo() {
    return {
        restrict: 'E',
        replace: true,
        template: '<input kendo-combo-box />',
        link: function (scope, element, attrs) {

        }
    };
}

export default ComboByKendoCombo;

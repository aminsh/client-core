function datepickerByKendo(){
    return {
        restrict: 'E',
        template: '<input kendo-date-picker style="width: 100%;" />',
        replace: true,
        link: function(scope, element, attrs){

        }
    };
}

export default datepickerByKendo;
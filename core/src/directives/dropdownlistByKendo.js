import $ from 'jquery';

function dropdownlistByKendo() {
    return {
        restrict: 'E',
        require: 'ngModel',
        template: '<select></select>',
        replace: true,
        scope: {
            dataTextField: '@kDataTextField',
            dataValueField: '@kDataValueField',
            optionLabel: '@kOptionLabel',
            dataSource: '=kDataSource',
            onChange: '&kOnChange'
        },
        link: function (scope, element, attrs, ngModel) {
            let dropdown = $(element).kendoDropDownList({
                optionLabel: scope.optionLabel,
                dataTextField: scope.dataTextField,
                dataValueField: scope.dataValueField,
                dataSource: scope.dataSource,
                change: (e)=> {
                    let item = e.sender.dataItem();

                    scope.$apply(()=>
                        ngModel.$setViewValue(item[scope.dataValueField]));
                    if (scope.onChange)
                        scope.onChange({selectedItem: item});
                }
            }).data('kendoDropDownList');

            ngModel.$render = ()=> dropdown.value(ngModel.$modelValue);
        }
    };
}

export default dropdownlistByKendo;
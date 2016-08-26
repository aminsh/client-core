(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _core = require('./core.module');

var _core2 = _interopRequireDefault(_core);

var _translateByAngularTranslate = require('./services/translateByAngularTranslate');

var _translateByAngularTranslate2 = _interopRequireDefault(_translateByAngularTranslate);

var _comboByKendoCombo = require('./directives/comboByKendoCombo');

var _comboByKendoCombo2 = _interopRequireDefault(_comboByKendoCombo);

var _contentByBootstrap = require('./directives/contentByBootstrap');

var _contentByBootstrap2 = _interopRequireDefault(_contentByBootstrap);

var _datepickerByKendo = require('./directives/datepickerByKendo');

var _datepickerByKendo2 = _interopRequireDefault(_datepickerByKendo);

var _dropdownlistByKendo = require('./directives/dropdownlistByKendo');

var _dropdownlistByKendo2 = _interopRequireDefault(_dropdownlistByKendo);

var _gridByKendo = require('./directives/gridByKendo');

var _gridByKendo2 = _interopRequireDefault(_gridByKendo);

var _layoutByJquery = require('./directives/layoutByJquery');

var _numeric = require('./directives/numeric');

var _numeric2 = _interopRequireDefault(_numeric);

var _uploaderByPlupload = require('./directives/uploaderByPlupload');

var _uploaderByPlupload2 = _interopRequireDefault(_uploaderByPlupload);

var _textEditorByKendoEditor = require('./directives/textEditorByKendoEditor');

var _textEditorByKendoEditor2 = _interopRequireDefault(_textEditorByKendoEditor);

var _apiPromise = require('./services/apiPromise');

var _apiPromise2 = _interopRequireDefault(_apiPromise);

var _checkBox = require('./directives/checkBox');

var _checkBox2 = _interopRequireDefault(_checkBox);

var _button = require('./directives/button');

var _button2 = _interopRequireDefault(_button);

var _routeNavigatorService = require('./services/routeNavigatorService');

var _routeNavigatorService2 = _interopRequireDefault(_routeNavigatorService);

var _confirmByAngularBootstraperService = require('./services/confirmByAngularBootstraperService');

var _loggerByToastrService = require('./services/loggerByToastrService');

var _loggerByToastrService2 = _interopRequireDefault(_loggerByToastrService);

var _modalBaseByAngularBootstrap = require('./services/modalBaseByAngularBootstrap');

var _modalBaseByAngularBootstrap2 = _interopRequireDefault(_modalBaseByAngularBootstrap);

var _gridFilterCellTypeProvider = require('./services/gridFilterCellTypeProvider');

var _gridFilterCellTypeProvider2 = _interopRequireDefault(_gridFilterCellTypeProvider);

var _menuItemsProvider = require('./services/menuItemsProvider');

var _menuItemsProvider2 = _interopRequireDefault(_menuItemsProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* services  configuration */
_core2.default.factory('translate', _translateByAngularTranslate2.default).factory('logger', _loggerByToastrService2.default).factory('modalBase', _modalBaseByAngularBootstrap2.default).factory('confirm', _confirmByAngularBootstraperService.confirm).factory('apiPromise', _apiPromise2.default).factory('navigate', _routeNavigatorService2.default);

_core2.default.controller('confirmCtrl', _confirmByAngularBootstraperService.confirmCtrl);

_core2.default.provider('gridFilterCellType', _gridFilterCellTypeProvider2.default);
_core2.default.provider('menuItems', _menuItemsProvider2.default);

/* directive configuration */
_core2.default.directive('devTagComboBox', _comboByKendoCombo2.default);
_core2.default.directive('devTagContent', _contentByBootstrap2.default);
_core2.default.directive('devTagDatepicker', _datepickerByKendo2.default);
_core2.default.directive('devTagDropdownlist', _dropdownlistByKendo2.default);
_core2.default.directive('devTagGrid', _gridByKendo2.default);
_core2.default.directive('devTagHeader', _layoutByJquery.header);
_core2.default.directive('devTagTogglemenu', _layoutByJquery.togglemenu);
_core2.default.directive('devTagNumeric', _numeric2.default);
//coreModule.directive('devTagUploader', uploaderByPlupload);
_core2.default.directive('devTagEditor', _textEditorByKendoEditor2.default);
_core2.default.directive('devTagCheckBox', _checkBox2.default);
_core2.default.directive('devTagButton', _button2.default);

},{"./core.module":2,"./directives/button":3,"./directives/checkBox":4,"./directives/comboByKendoCombo":5,"./directives/contentByBootstrap":6,"./directives/datepickerByKendo":7,"./directives/dropdownlistByKendo":8,"./directives/gridByKendo":9,"./directives/layoutByJquery":10,"./directives/numeric":11,"./directives/textEditorByKendoEditor":12,"./directives/uploaderByPlupload":13,"./services/apiPromise":14,"./services/confirmByAngularBootstraperService":15,"./services/gridFilterCellTypeProvider":16,"./services/loggerByToastrService":17,"./services/menuItemsProvider":18,"./services/modalBaseByAngularBootstrap":19,"./services/routeNavigatorService":20,"./services/translateByAngularTranslate":21}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

require('kendo');

require('kendo.messages');

require('kendo.culture');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coreModule = _angular2.default.module('core.module', ['kendo.directives']);

exports.default = coreModule;

},{"angular":"angular","kendo":"kendo","kendo.culture":"kendo.culture","kendo.messages":"kendo.messages"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
        link: function link(scope, element, attrs) {}
    };
}

exports.default = button;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
        link: function link(scope, element, attrs) {
            scope.change = function () {
                scope.ngModel = !scope.ngModel;
            };
        }
    };
}

exports.default = checkBox;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function ComboByKendoCombo() {
    return {
        restrict: 'E',
        replace: true,
        template: '<input kendo-combo-box />',
        link: function link(scope, element, attrs) {}
    };
}

exports.default = ComboByKendoCombo;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function contentByBootstrap() {
    return {
        restrict: 'E',
        templateUrl: 'content-template.html',
        transclude: true,
        scope: {},
        link: function link(scope, element, attrs) {
            scope.title = attrs.title;
        }
    };
}

exports.default = contentByBootstrap;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function datepickerByKendo() {
    return {
        restrict: 'E',
        template: '<input kendo-date-picker style="width: 100%;" />',
        replace: true,
        link: function link(scope, element, attrs) {}
    };
}

exports.default = datepickerByKendo;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        link: function link(scope, element, attrs, ngModel) {
            var dropdown = (0, _jquery2.default)(element).kendoDropDownList({
                optionLabel: scope.optionLabel,
                dataTextField: scope.dataTextField,
                dataValueField: scope.dataValueField,
                dataSource: scope.dataSource,
                change: function change(e) {
                    var item = e.sender.dataItem();

                    scope.$apply(function () {
                        return ngModel.$setViewValue(item[scope.dataValueField]);
                    });
                    if (scope.onChange) scope.onChange({ selectedItem: item });
                }
            }).data('kendoDropDownList');

            ngModel.$render = function () {
                return dropdown.value(ngModel.$modelValue);
            };
        }
    };
}

exports.default = dropdownlistByKendo;

},{"jquery":"jquery"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gridByKendo(gridFilterCellType, $compile) {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div>' + '<div ng-transclude style="display: none"></div>' + '</div>',
        scope: {
            kOption: '=',
            kDatasource: '=',
            option: '=',
            detailOption: '='
        },
        link: function link(scope, element, attrs) {

            var grid = {};

            if (scope.kOption) {
                grid = (0, _jquery2.default)(element).kendoGrid(scope.kOption).data("kendoGrid");
            } else {
                var option = createKendoGridOption(scope, scope.option);
                if (scope.kDatasource) option.dataSource = scope.kDatasource;

                if (scope.detailOption) {
                    var detailOption = createKendoGridOption(scope, scope.detailOption);

                    option.detailTemplate = kendo.template('<div class="detail-template"></div>');
                    option.detailInit = function (e) {
                        var detailRow = e.detailRow;
                        var parent = e.data;

                        if (scope.detailOption.url) {
                            var url = scope.detailOption.url(e.data);
                            detailOption.dataSource = new kendo.data.DataSource({
                                transport: {
                                    read: {
                                        url: url,
                                        dataType: "json",
                                        contentType: 'application/json; charset=utf-8',
                                        type: 'GET'
                                    }
                                },
                                schema: {
                                    data: "data",
                                    total: "total"
                                    //model: model
                                },
                                pageSize: option.pageSize || 20,
                                serverPaging: true,
                                serverFiltering: true,
                                serverSorting: true
                            });
                        }

                        detailRow.find('.detail-template').kendoGrid(detailOption);

                        parent.refreshDetail = function () {
                            detailOption.dataSource.read();
                        };
                    };
                }

                var grid = (0, _jquery2.default)(element).kendoGrid(option).data("kendoGrid");

                if (option.commandTemplate) option.commandTemplate.commands.forEach(function (cmd) {
                    (0, _jquery2.default)(element).on("click", cmd.selector, function (e) {
                        var dataItem = grid.dataItem((0, _jquery2.default)(e.currentTarget).closest("tr"));
                        cmd.action(dataItem);
                        scope.$apply();
                    });
                });
            }

            if (scope.option) {
                scope.option.refresh = function () {
                    grid.dataSource.read();
                };
            }

            function createKendoGridOption(scope, option) {

                var aggregatesForDateSource = [];

                function setAggregatesForDataSource(column) {
                    var aggregates = column.aggregates;

                    if (!aggregates) return;

                    if (aggregates.length == 0) return;

                    var aggregatesForThisColumn = aggregates.asEnumerable().select(function (agg) {
                        return {
                            field: column.name,
                            aggregate: agg
                        };
                    }).toArray();

                    aggregatesForDateSource = aggregatesForDateSource.asEnumerable().concat(aggregatesForThisColumn).toArray();
                }

                var cols = option.columns.asEnumerable().select(function (col) {
                    setAggregatesForDataSource(col);

                    return {
                        field: col.name,
                        title: col.title,
                        width: col.width,
                        format: col.format,
                        template: col.template,
                        aggregates: col.aggregates,
                        footerTemplate: col.footerTemplate,
                        filterable: getFilterable(col.type)
                    };
                }).toArray();

                var model = { fields: {} };
                option.columns.forEach(function (col) {
                    model.fields[col.name] = { type: gridFilterCellType[col.type].modelType };
                });

                var commands = option.commands.asEnumerable().select(function (cmd) {
                    return {
                        text: cmd.title,
                        imageClass: cmd.imageClass,
                        click: function click(e) {
                            e.preventDefault();

                            var dataItem = this.dataItem((0, _jquery2.default)(e.currentTarget).closest("tr"));
                            cmd.action(dataItem);

                            scope.$apply();
                        }
                    };
                }).toArray();

                if (option.commandTemplate) cols.push({ template: kendo.template((0, _jquery2.default)(option.commandTemplate.template).html()) });

                cols.push({ command: commands });

                var filterable = option.filterable == undefined || option.filterable == true ? {
                    mode: 'row',
                    operators: {
                        string: { contains: 'Contains' },
                        number: {
                            eq: 'Equal to',
                            gte: "Greater than or equal to",
                            gt: "Greater than",
                            lte: "Less than or equal to",
                            lt: "Less than"
                        },
                        date: {
                            gt: "After",
                            lt: "Before",
                            eq: "Equal"
                        }
                    }
                } : false;

                var kendGridOption = {
                    dataSource: new kendo.data.DataSource({
                        transport: {
                            read: {
                                url: option.readUrl,
                                dataType: "json",
                                contentType: 'application/json; charset=utf-8',
                                type: 'GET'
                            },
                            parameterMap: function parameterMap(options) {
                                return options;
                            }
                        },
                        schema: {
                            data: "data",
                            total: "total",
                            model: model,
                            aggregates: "aggregates"
                        },
                        serverAggregates: true,
                        aggregate: aggregatesForDateSource,
                        pageSize: option.pageSize || 20,
                        serverPaging: true,
                        serverFiltering: true,
                        serverSorting: true
                    }),
                    filterable: filterable,
                    pageable: { refresh: true },
                    sortable: true,
                    columns: cols,
                    selectable: option.selectable,
                    resizable: true,
                    change: function change() {
                        var current = this.dataItem(this.select());

                        option.current = current;

                        scope.$apply();
                    }
                };

                if (option.toolbar) scope.options.toolbar = kendo.template(scope.toolbar);

                return kendGridOption;
            }

            function getFilterable(type) {
                var filterable = {};
                var cell = gridFilterCellType[type];

                if (cell.hasOwnProperty('cell')) cell = cell.cell;

                filterable.cell = cell;

                return filterable;
            }
        }
    };
}

//kendo.support.delayedClick = function () {};
exports.default = gridByKendo;

},{"jquery":"jquery"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.header = header;
exports.togglemenu = togglemenu;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function header() {
    return {
        restrict: 'E',
        templateUrl: 'header-template.html',
        replace: true,
        scope: {},
        link: function link(scope, element, attrs) {
            (0, _jquery2.default)(element).find('.dropdown');
            (0, _jquery2.default)('input').click(function () {
                (0, _jquery2.default)('.dropdown').addClass('open');
                (0, _jquery2.default)('.dropdown').addClass('test-class');
            });
        }
    };
}

function togglemenu() {
    return {
        restrict: 'E',
        templateUrl: 'togglemenu-template.html',
        replace: true,
        scope: {
            menuitems: '=',
            toggleobservable: '='
        },
        transclude: true,
        link: function link(scope, element, attrs) {
            (0, _jquery2.default)("#menu-toggle").click(function (e) {
                e.preventDefault();
                (0, _jquery2.default)("#wrapper").toggleClass("toggled");
            });

            createMenu(scope.menuitems, element);
        }
    };
}

function createMenu(menuItems, element) {
    menuItems.forEach(function (item) {
        var $el = (0, _jquery2.default)(element).find('.gw-nav');
        var icon = item.icon || 'file';

        var li = (0, _jquery2.default)('<li class="init-arrow-down"></li>');
        li.append('<a href="{0}"></a>'.format(item.url));
        li.find('a').append('<span class="webfont-menu" aria-hidden="true">' + '<span class="glyphicon glyphicon-{0}"></span>'.format(icon) + '</span>'.format(icon));

        li.find('a').append('<span class="gw=menu-text">{0}</span>'.format(item.title));

        if (item.children.length > 0) {
            li.find('a').append('<b class="gw-arrow icon-arrow-up8"></b>');
            li.append('<ul class="gw-submenu"></ul>');

            item.children.forEach(function (child) {
                var liChild = (0, _jquery2.default)('<li></li>');
                var icon = child.icon || 'file';

                liChild.append('<a href="{0}"></a>'.format(child.url));
                /* liChild.find('a')
                 .append('<span class="webfont-submenu glyphicon glyphicon-{0}"></span>'
                 .format(icon));*/

                liChild.find('a').append(child.title);

                li.find('ul').append(liChild);
            });
        }
        ;

        $el.append(li);
    });

    menuCreateExpandAndActiveBehavior((0, _jquery2.default)(element));
}

function menuCreateExpandAndActiveBehavior($element) {
    var $ele = function $ele(selector) {
        return $element.find(selector);
    };

    $ele('.gw-nav > li > a').click(function (e) {
        var hrefAttr = (0, _jquery2.default)(this).attr('href');
        if (hrefAttr == undefined || hrefAttr == null || hrefAttr == '') e.preventDefault();

        var gw_nav = $ele('.gw-nav');
        gw_nav.find('li').removeClass('active');
        $ele('.gw-nav > li > ul > li').removeClass('active');

        var checkElement = (0, _jquery2.default)(this).parent();
        var ulDom = checkElement.find('.gw-submenu')[0];

        if (ulDom == undefined) {
            checkElement.addClass('active');
            $ele('.gw-nav').find('li').find('ul:visible').slideUp();
            return;
        }
        if (ulDom.style.display != 'block') {
            gw_nav.find('li').find('ul:visible').slideUp();
            gw_nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
            gw_nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
            checkElement.removeClass('init-arrow-down');
            checkElement.removeClass('arrow-down');
            checkElement.addClass('arrow-up');
            checkElement.addClass('active');
            checkElement.find('ul').slideDown(300);
        } else {
            checkElement.removeClass('init-arrow-up');
            checkElement.removeClass('arrow-up');
            checkElement.removeClass('active');
            checkElement.addClass('arrow-down');
            checkElement.find('ul').slideUp(300);
        }
    });
    (0, _jquery2.default)('.gw-nav > li > ul > li > a').click(function () {
        $ele(this).parent().parent().removeClass('active');
        $ele('.gw-nav > li > ul > li').removeClass('active');
        (0, _jquery2.default)(this).parent().addClass('active');
    });
};

},{"jquery":"jquery"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        restrict: 'E',
        template: '<input type="number" class="form-control" /> ',
        replace: true
    };
};

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function textEditorByKendoEditor() {
    return {
        restrict: 'E',
        replace: true,
        template: '<textarea kendo-editor k-ng-model="ngModel"></textarea>',
        link: function link(scope, element, attrs) {}
    };
}

exports.default = textEditorByKendoEditor;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        restrict: 'E',
        template: '<div id="uploader">' + '<div  id="drop_element" style="width: 600px;height: 200px;border: dashed 5px #555555;padding: 50px">' + '<a class="btn btn-primary" id="btn_choosefile">{{"UPDATE IMAGE"| translate}}</a>' + '</div>' + '</div>',
        scope: {
            uploaded: '&'
        },
        link: function link(scope, element, attrs) {

            var uploader = new plupload.Uploader({
                container: document.getElementById('uploader'),
                browse_button: 'btn_choosefile',
                runtimes: 'html5,flash,silverlight,html4',
                url: "/api/upload",
                filters: [{ title: "Image files", extensions: "jpg,gif,png" }],
                drop_element: 'drop_element',
                dragdrop: true,

                init: {
                    FileUploaded: function FileUploaded(file, up, res) {
                        scope.uploaded({ img: JSON.parse(res.response) });
                    },
                    FilesAdded: function FilesAdded(up, files) {
                        up.start();
                    }
                }
            });

            uploader.init();
        }
    };
};

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function apiPromise($http, $q) {

    function promise($httpPromise) {
        var deferred = $q.defer();

        $httpPromise.success(function (result) {
            if (result.isValid) {
                deferred.resolve(result.returnValue);
            } else {
                deferred.reject(result.errors);
            }
        }).error(function (error) {
            console.error(error);
            deferred.reject(['Internal Error']);
        });

        return deferred.promise;
    }

    return {
        get: function get(url, data) {
            var deferred = $q.defer();

            $http.get(url, data).success(function (result) {
                deferred.resolve(result);
            }).error(function (error) {
                console.error(error);
                deferred.reject(['Internal Error']);
            });

            return deferred.promise;
        },
        post: function post(url, data) {
            return promise($http.post(url, data));
        },
        put: function put(url, data) {
            return promise($http.put(url, data));
        },
        delete: function _delete(url, data) {
            return promise($http.delete(url, data));
        }
    };
}

exports.default = apiPromise;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.confirmCtrl = confirmCtrl;
exports.confirm = confirm;
function confirmCtrl($scope, $modalInstance, data) {
    $scope.title = data.title;
    $scope.message = data.message;

    $scope.ok = function () {
        $modalInstance.close(true);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss(false);
    };
}

function confirm($modal, $q, $templateCache) {
    $templateCache.put('confirm_template.html', '<div class="modal-header">' + ' <h5 class="modal-title">{{title}}</h5>' + '</div>' + '<div class="modal-body">' + '    <span>{{message}}</span>' + '</div>' + '<div class="modal-footer">' + '<button class="btn btn-primary" ng-click="ok()">{{"Confirm"| translate}}</button>' + '<button class="btn btn-default" ng-click="cancel()">{{"Cancel"| translate}}</button>' + '</div>');
    return function (title, message) {

        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'confirm_template.html',
            controller: 'confirmCtrl',
            backdrop: true,
            keyboard: false,
            size: 'sm',
            resolve: {
                data: function data() {
                    return { title: title, message: message };
                }
            }
        });

        var deferred = $q.defer();

        modalInstance.result.then(function (result) {
            deferred.resolve(result);
        }, function (a) {
            //$log.info('Modal dismissed at: ' + new Date());
        });

        return deferred.promise;
    };
}

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var type = {
        string: {
            showOperators: false,
            operator: "contains"
        },
        number: {
            showOperators: true,
            operator: "eq"
        },
        date: {
            showOperator: true,
            operator: "eq"
        }
    };

    function combo(option) {
        return {
            showOperators: false,
            operator: "eq",
            template: function template(args) {
                args.element.kendoComboBox({
                    placeholder: '...',
                    dataTextField: option.text,
                    dataValueField: option.value,
                    valuePrimitive: true,
                    filter: "contains",
                    autoBind: false,
                    minLength: 2,
                    dataSource: {
                        type: "json",
                        serverFiltering: true,
                        transport: {
                            read: {
                                url: option.url
                            },
                            parameterMap: function parameterMap(options) {
                                return kendo.stringify(options);
                            }
                        },
                        schema: {
                            parse: function parse(response) {
                                return response.data;
                            }
                        }
                    }
                });
            }
        };
    }

    function dropdown(option) {
        return {
            showOperators: false,
            operator: "eq",
            template: function template(args) {
                args.element.kendoDropDownList({
                    dataTextField: option.text,
                    dataValueField: option.value,
                    filter: "contains",
                    autoBind: false,
                    minLength: 2,
                    dataSource: option.data,
                    valuePrimitive: true
                });
            }
        };
    }

    this.control = {
        combo: combo,
        dropdown: dropdown
    };

    this.$get = function () {
        return type;
    };

    this.set = function (extendedObject) {
        type = angular.extend(type, extendedObject);
    };
};

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (translate) {
    _toastr2.default.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-left",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    return {
        success: function success(message) {
            if (!message) message = translate('Done successfully');
            _toastr2.default.success(message);
        },
        info: function info(message) {
            _toastr2.default.info(message);
        },
        warning: function warning(message) {
            _toastr2.default.warning(message);
        },
        error: function error(message) {
            _toastr2.default.error(message);
        }
    };
};

var _toastr = require("toastr");

var _toastr2 = _interopRequireDefault(_toastr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"toastr":"toastr"}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.menuItems = [];
    }

    _createClass(_class, [{
        key: "$get",
        value: function $get() {
            return this.menuItems;
        }
    }, {
        key: "add",
        value: function add(item) {
            this.menuItems.push(item);

            return this;
        }
    }]);

    return _class;
}();

exports.default = _class;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function ($modal, $q) {

    /*{controller: string, templateUrl: string, size(optional): string, data: object}*/

    var modalFunction = function modalFunction(option) {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: option.templateUrl,
            controller: option.controller,
            backdrop: true,
            keyboard: false,
            size: option.size, // nothing = normal , 'sm' = small , 'lg' = large
            resolve: {
                data: function data() {
                    return option.data;
                }
            }
        });

        var deferred = $q.defer();

        modalInstance.result.then(function (result) {
            deferred.resolve(result);
        });

        return deferred.promise;
    };

    return function (option) {
        return {
            show: function show(data) {
                option.data = data;
                return modalFunction(option);
            }
        };
    };
};

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function routeNavigatorService($route, $location) {

    function getRoute(name) {
        return getKeys($route.routes).asEnumerable().select(function (r) {
            return $route.routes[r];
        }).first(function (r) {
            return r.controller == '{0}Controller'.format(name);
        });
    }

    var navigate = function navigate(name, parameters) {
        var route = getRoute(name);
        var path = route.originalPath;

        route.keys.forEach(function (key) {
            var parameterValue = parameters[key.name] || '';
            if (parameterValue == '' && key.optional == true) throw new Error('[{0}] parameter is not optional'.format(key.name));

            path = path.replace(new RegExp(':{0}'.format(key.name)), parameterValue);
        });

        $location.path(path);
    };

    return navigate;
}

exports.default = routeNavigatorService;

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function translateByAngularTranslate($filter) {
    return function (key) {
        return $filter('translate')(key);
    };
}

exports.default = translateByAngularTranslate;

},{}]},{},[1])
//# sourceMappingURL=core.bundle.js.map

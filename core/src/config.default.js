import coreModule from './core.module';

import translateByAngularTranslate from './services/translateByAngularTranslate';
import comboByKendoCombo from './directives/comboByKendoCombo';
import contentByBootstrap from './directives/contentByBootstrap';
import datepickerByKendo from './directives/datepickerByKendo';
import dropdownlistByKendo from './directives/dropdownlistByKendo';
import gridByKendo from './directives/gridByKendo';
import {header, togglemenu} from './directives/layoutByJquery';
import numeric from './directives/numeric';
import uploaderByPlupload from './directives/uploaderByPlupload';
import textEditorByKendoEditor from './directives/textEditorByKendoEditor';
import apiPromise from './services/apiPromise';
import checkbox from './directives/checkBox';
import button from './directives/button';

import routeNavigatorService from './services/routeNavigatorService';

import {confirmCtrl, confirm} from './services/confirmByAngularBootstraperService';
import loggerByToastr from './services/loggerByToastrService';
import modalBaseByAngularBootstrap from './services/modalBaseByAngularBootstrap';

import gridFilterCellTypeProvider from './services/gridFilterCellTypeProvider';
import menuItems from './services/menuItemsProvider';

/* services  configuration */
coreModule
    .factory('translate', translateByAngularTranslate)
    .factory('logger', loggerByToastr)
    .factory('modalBase', modalBaseByAngularBootstrap)
    .factory('confirm', confirm)
    .factory('apiPromise', apiPromise)
    .factory('navigate', routeNavigatorService);

coreModule.controller('confirmCtrl', confirmCtrl);

coreModule.provider('gridFilterCellType', gridFilterCellTypeProvider);
coreModule.provider('menuItems', menuItems);

/* directive configuration */
coreModule.directive('devTagComboBox', comboByKendoCombo);
coreModule.directive('devTagContent', contentByBootstrap);
coreModule.directive('devTagDatepicker', datepickerByKendo);
coreModule.directive('devTagDropdownlist', dropdownlistByKendo);
coreModule.directive('devTagGrid', gridByKendo);
coreModule.directive('devTagHeader', header);
coreModule.directive('devTagTogglemenu', togglemenu);
coreModule.directive('devTagNumeric', numeric);
//coreModule.directive('devTagUploader', uploaderByPlupload);
coreModule.directive('devTagEditor', textEditorByKendoEditor);
coreModule.directive('devTagCheckBox', checkbox);
coreModule.directive('devTagButton', button);


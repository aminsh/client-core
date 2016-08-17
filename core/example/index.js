import coreModule from '../src/core.module';
debugger;
import '../src/config.default';

debugger;

class HomeController{
    constructor($scope){
        debugger;
        $scope.title = 'Home on class';
        $scope.des = "klsjfdlkas";
        $scope.name = "amin";
    }
}


coreModule.controller('homeCtrl', HomeController);

angular.bootstrap(document, ['core.module']);

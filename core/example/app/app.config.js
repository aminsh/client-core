angular.module('app', ['core.module'])
    .config(($routeProvider,
             loadAsyncControllerProvider,
             $locationProvider,
             $controllerProvider,
             $compileProvider,
             $filterProvider,
             $provide)=> {

        let app = angular.module('app');
        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        app.init(() => {
            angular.bootstrap(document, ['app'])
        });

        loadAsyncControllerProvider.setBaseDirectories('app/controllers', 'app/views');
        loadAsyncControllerProvider.setMainModule(app);

        $routeProvider
        .when('/',{});

    });
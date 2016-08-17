function HeaderByDefault(){
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>{{title}}</h1>'
    }
}

export default HeaderByDefault;
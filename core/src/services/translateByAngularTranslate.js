function translateByAngularTranslate($filter){
    return (key) => $filter('translate')(key);
}

export default translateByAngularTranslate;

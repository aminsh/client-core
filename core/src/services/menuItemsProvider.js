
export default class {

    constructor(){
        this.menuItems = [];
    }

    $get(){
        return this.menuItems;
    }

    add(item){
        this.menuItems.push(item);

        return this;
    }
}

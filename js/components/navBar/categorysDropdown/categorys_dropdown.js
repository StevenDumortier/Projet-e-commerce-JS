import { DropdownItem } from "./dropdown_item.js";

export class CategoryDropdown{
    constructor(categorys){
        this.$categorysDropdown=document.querySelector(".dropdown-menu");
        this.categorys=categorys;
    }


    render(){
        for(let category of this.categorys){
            const dropdownItem =DropdownItem(category);
            this.$categorysDropdown.appendChild(dropdownItem);
    }
}
}


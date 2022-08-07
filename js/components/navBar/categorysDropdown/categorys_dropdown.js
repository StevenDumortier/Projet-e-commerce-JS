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

   
    
    


       /* const listCategorys=document.querySelector(".dropdown-menu");
        listCategorys.innerHTML="";
    for(let category of response.data){
        const selectCategory = document.createElement("li");
        const linkCategory=document.createElement("a");
        linkCategory.classList.add("dropdown-item");
        linkCategory.innerText=category.name;
        selectCategory.value=category.id
    selectCategory.appendChild(linkCategory);
        listCategorys.appendChild(selectCategory);*/
   
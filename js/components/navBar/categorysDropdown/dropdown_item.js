import { DropdownItemLink } from "./dropdown_item_link.js";

export function DropdownItem(category){
 const selectCategory = document.createElement("li");
 selectCategory.value=category.id; //a modifier
 selectCategory.appendChild(DropdownItemLink(category));
 return selectCategory; 
}

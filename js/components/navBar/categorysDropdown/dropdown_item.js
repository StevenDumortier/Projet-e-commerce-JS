import { DropdownItemLink } from "./dropdown_item_link.js";

export function DropdownItem(category){
 const selectCategory = document.createElement("li");
 selectCategory.appendChild(DropdownItemLink(category));
 return selectCategory; 
}

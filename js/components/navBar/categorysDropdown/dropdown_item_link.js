export function DropdownItemLink(category){
const linkCategory=document.createElement("a");
linkCategory.classList.add("dropdown-item");
linkCategory.innerText=category.name; 
return linkCategory;  
}

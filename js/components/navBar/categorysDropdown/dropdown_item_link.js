export function DropdownItemLink(category){
const linkCategory=document.createElement("a");
linkCategory.classList.add("dropdown-item");
linkCategory.innerText=category.name; 
linkCategory.href = `./index.html?category=${category.slug}`;
return linkCategory;  
}

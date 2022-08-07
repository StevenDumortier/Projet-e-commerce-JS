axios
.get('http://localhost:3000/api/v1/categories')
.then(function(response){
        const listCategorys=document.querySelector(".dropdown-menu");
        listCategorys.innerHTML="";
    for(let category of response.data){
        const selectCategory = document.createElement("li");
        const linkCategory=document.createElement("a");
        linkCategory.classList.add("dropdown-item");
        linkCategory.innerText=category.name;
        selectCategory.value=category.id
    selectCategory.appendChild(linkCategory);
        listCategorys.appendChild(selectCategory);
    }})})

export function FilterCardList(product,card){
const search = document.getElementById("search");
        search.addEventListener("keyup", function(e) {
        const searchString = e.target.value.toLowerCase();
       // console.log(searchString)
       //const isVisible = card.innerText.toLowerCase().includes(searchString)
       const isVisible = product.name.toLowerCase().includes(searchString)
      //  console.log((product.name))
        card.classList.toggle("hide",!isVisible)
      }
        )
}

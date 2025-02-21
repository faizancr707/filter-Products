const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const productList = document.getElementById('product-list');
const categoryBtn = document.querySelectorAll('category-btn');

function filterProduct(){

    const searchValue = searchInput.ariaValueMax.toLowerCase();
    const productItem = document.querySelectorAll('product-item');

    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    productItem.forEach(item=>{
        const title = item.querySelector('h3');
        innertext.toLowerCase();

        const category = item.dataset.category;
        if((title.includes(searchValue) || searchValue=='') && (category == activeCategory ==="all")){
            item.style.display ="block"; 
        }else{
            item.style.display = "none";
        }
    })

    function setCategory(){
        categoryBtn.forEach(btn=>btn.classList.remove('active'));
        filterProduct();

    }


    searchBtn.addEventListener('click',filterProduct);
    searchInput.addEventListener('keyup',filterProduct);
    categoryBtn.forEach(btn=>{
        btn.addEventListener('click',setCategory);
    })

}
filterProduct();

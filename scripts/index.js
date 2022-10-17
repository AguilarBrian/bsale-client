const PRODUCTS_URL = "https://bsale-challenge-api.herokuapp.com/api/v1/products"
const PRODUCTS_SEARCH_URL = "https://bsale-challenge-api.herokuapp.com/api/v1/products?search="
const PRODUCT_URL = "https://bsale-challenge-api.herokuapp.com/api/v1/product/:id"
const CATEGORIES_URL = "https://bsale-challenge-api.herokuapp.com/api/v1/categories"
const CATEGORY_URL = "https://bsale-challenge-api.herokuapp.com/api/v1/category/:id"

const TITLE = document.createElement("h1")
TITLE.innerHTML = "BSale Challenge"

const SEARCH_INPUT = document.createElement("input")
SEARCH_INPUT.setAttribute("id", "search")
SEARCH_INPUT.setAttribute("type", "text")
SEARCH_INPUT.setAttribute("placeholder", "Search")


const PRODUCTS_DIV = document.createElement("div")
PRODUCTS_DIV.setAttribute("id", "products")

document.body.append(TITLE, SEARCH_INPUT, PRODUCTS_DIV)

const showProducts = (data) => {
    for (let product of data) {
        PRODUCTS_DIV.innerHTML += `
                    <div class="product" id="${product.id}">
                        <img src="${product.url_image ? product.url_image : 'https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg'}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>$ ${product.price}</p>
                    </div>
                `
    }
}

const search = () => {
    const searchString = document.getElementById("search").value
    if (searchString.length > 0) {
        fetch(PRODUCTS_SEARCH_URL + searchString)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                showProducts(data)
            })
    } else {
        fetch(PRODUCTS_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                showProducts(data)
            })
    }
}

SEARCH_INPUT.addEventListener('keyup', e => { search(); });

const PRODUCTS_URL = "https://bsale-challenge-api.herokuapp.com/api/v1/products"
const PRODUCTS_SEARCH_URL = "https://bsale-challenge-api.herokuapp.com/api/v1/products?search="
const PRODUCT_URL = "https://bsale-challenge-api.herokuapp.com/api/v1/product/:id"
const CATEGORIES_URL = "https://bsale-challenge-api.herokuapp.com/api/v1/categories"
const CATEGORY_URL = "https://bsale-challenge-api.herokuapp.com/api/v1/category/:id"

const TITLE = document.createElement("h1")
TITLE.innerHTML = "BSale Challenge"

const SEARCH = document.createElement("input")
SEARCH.setAttribute("id", "search")
SEARCH.setAttribute("type", "text")
SEARCH.setAttribute("placeholder", "Search")

const SEARCH_BUTTON = document.createElement("button")
SEARCH_BUTTON.setAttribute("id", "searchButton")
SEARCH_BUTTON.innerHTML = "Search"

const PRODUCTS = document.createElement("div")
PRODUCTS.setAttribute("id", "products")

document.body.append(TITLE, SEARCH, SEARCH_BUTTON, PRODUCTS)

fetch(PRODUCTS_URL)
    .then(response => response.json())
    .then(data => {
        for (let product of data) {
            PRODUCTS.innerHTML += `
                        <div class="product" id="${product.id}">
                            <img src="${product.url_image}" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <p>$ ${product.price}</p>
                        </div>
                    `
        }
    })

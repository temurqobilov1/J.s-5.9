import { addProduct } from "./bakset.js"; 

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

const aboutList = document.getElementById("about-list");
const aboutTemplate = document.getElementById("about-template");

const cartList = document.querySelector(".cart-list")
const cartTemplate = document.querySelector(".cart-template")

function updateUI({ products }) {
  products.forEach((product) => {
    const {
      id,
      title,
      price: _price,
      thumbnail,
      description: _discription,
    } = product;

    const clone = template.content.cloneNode(true);

    const image = clone.querySelector(".product-image");
    const cardTitle = clone.querySelector(".card-title");
    const discription = clone.querySelector(".discription");
    const price = clone.querySelector(".card-price");
    const a = clone.querySelector("a");
    const button = clone.querySelector(".buy-button");

    button.addEventListener("click", (e) => {
        e.preventDefault();
        addProduct(product);
    });

    a.href = `./about.html?id=${id}`;

    image.src = thumbnail;
    cardTitle.textContent = title;
    discription.textContent = _discription;
    price.textContent = _price;

    productsList.appendChild(clone);
  });
}

function updateUIAboutUI(products) {
    const { title,price, thumbnail, discription, brand, rating } = products;

    const clone = aboutTemplate.content.cloneNode(true);

    const aboutImage = clone.querySelector(".about-image");
    const aboutTitle = clone.querySelector(".about-title");
    const aboutDiscription = clone.querySelector(".about-discription");
    const aboutPrice = clone.querySelector(".about-price");
    const aboutBrand = clone.querySelector(".about-brand");
    const aboutRating = clone.querySelector(".about-rating");

    aboutImage.src = thumbnail;
    aboutTitle.textContent = title;
    aboutDiscription.textContent = discription;
    aboutPrice.textContent = price;
    aboutBrand.textContent = brand
    aboutRating.textContent = rating

    aboutList.appendChild(clone);
}

function updateCartUI (products) {
   products.forEach((product) => {
    const {id,title, price,thumbnail,description,brand,rating,amount
    } = product;

    const clone = cartTemplate.content.cloneNode(true);

    const cartImage = clone.querySelector(".cart-image");
    const cartTitle = clone.querySelector(".cart-title");
    const cartPrice = clone.querySelector(".cart-price");
    const cartBrand = clone.querySelector(".cart-brand");
    const cartRating = clone.querySelector(".cart-rating");

    cartImage.src = thumbnail;
    cartTitle.textContent = title;
    cartPrice.textContent = `$${price}`;
    cartBrand.textContent = brand;
    cartRating.textContent = rating;

    cartList.appendChild(clone);
});
}

export { updateUI, updateUIAboutUI,updateCartUI };

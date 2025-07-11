import { addProduct } from "./bakset.js"; 

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

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

const cardList = document.getElementById("card-list");
const Template = document.getElementById("template");

function updateUIAboutUI(products) {

    const { title, price: _price, thumbnail, description: _discription, brand } = products;

    const clone = Template.content.cloneNode(true);

    const cardImage = clone.querySelector(".card-image");
    const cardTitle = clone.querySelector(".card-title");
    const cardDiscription = clone.querySelector(".card-discription");
    const cardPrice = clone.querySelector(".card-price");
    const cardBrand = clone.querySelector(".card-brand");

    cardImage.src = thumbnail;
    cardTitle.textContent = title;
    cardDiscription.textContent = _discription;
    cardPrice.textContent = _price;
    cardBrand.textContent = brand

    cardList.appendChild(clone);
}

export { updateUI, updateUIAboutUI };

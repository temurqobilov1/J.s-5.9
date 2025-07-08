AOS.init();

const template = document.querySelector("template")
const productsList = document.getElementById("products-list")
const showBtn = document.getElementById("show-btn")
const showList = document.getElementById("show-list")



function updateUI({products}) {
    products.forEach((p) => {
        const { id, title, price : _price, thumbnail, description: _discription } = p;
        const clone = template.content.cloneNode(true);

        const image = clone.querySelector(".product-image");
        const cardTitle = clone.querySelector(".card-title");
        const discription = clone.querySelector(".discription");
        const price = clone.querySelector(".card-price");

        image.src = thumbnail;
        cardTitle.textContent = title
        discription.textContent = _discription;
        price.textContent = _price


        productsList.appendChild(clone)
    });
}



function getList({products}) {
    products.forEach((p) => {
        const { id, title, price : _price, thumbnail, description: _discription } = p;
        const clone = template.content.cloneNode(true);

        const image = clone.querySelector(".product-image");
        const cardTitle = clone.querySelector(".card-title");
        const discription = clone.querySelector(".discription");
        const price = clone.querySelector(".card-price");

        image.src = thumbnail;
        cardTitle.textContent = title
        discription.textContent = _discription;
        price.textContent = _price


        showList.appendChild(clone)
    });
}


async function getData(url) {
   const req = await fetch(url)
   const data = await req.json()
   return data;
}



getData("https://dummyjson.com/products")
  .then((data) => updateUI(data))
  .catch((error) => console.log(error));


  showBtn.addEventListener("click", () => {
    getData("https://dummyjson.com/products")
      .then((data) => getList(data))
      .catch((error) => console.log(error));
  });


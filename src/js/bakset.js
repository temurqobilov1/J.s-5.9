let products = localStorage.getItem("products")
? JSON.parse(localStorage.getItem("products"))
: [];

const productAmount = document.querySelector(".product-amount");

export const changeBasket = (products) =>{
    let amount = 0;
    products.forEach((product) => {
        amount += product.amount;
    });
    productAmount.textContent = amount;
}

if(products) {
    changeBasket(products)
}

export const addProduct = (p) => {
    let isAdded = products.find((product) => product.id == p.id);
    Toastify({
      text: "Maxsulot qo'shildi",
      className: "info",
      gravity: "top",
      position: "left",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();

    if (isAdded) {
        isAdded.amount += 1;
    }else{
        products.push({...p, amount: 1 })
    }

    localStorage.setItem("products", JSON.stringify(products));

    changeBasket(products);
}
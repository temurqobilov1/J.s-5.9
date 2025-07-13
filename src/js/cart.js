import {changeBasket} from "./bakset.js"
import { updateCartUI } from "./updateUI.js"

const localProduct = JSON.parse(localStorage.getItem("products"));

if(localProduct) {
    changeBasket(localProduct);
    updateCartUI(localProduct);
}
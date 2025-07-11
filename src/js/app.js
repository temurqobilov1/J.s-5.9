import getData from "./requst.js";
import { updateUI } from "./updateUI.js";


getData("https://dummyjson.com/products")
    .then((data) => updateUI(data))
    .catch((error) => console.log(error));

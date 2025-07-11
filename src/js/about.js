import getData from "./requst.js";
import { updateUIAboutUI } from "./updateUI.js";

let id = new URLSearchParams(document.location.search).get("id");

getData("https://dummyjson.com/products/" + id)
  .then((data) => updateUIAboutUI(data))
  .catch((error) => console.log(error)); 
const searchText = document.getElementById("search-text");
const ul = document.getElementById("products-list");

searchText.addEventListener("input", () => {
  Array.from(ul.children).forEach((item) => {
    if (
      item
        .querySelector(".card-title")
        .textContent.toLowerCase()
        .includes(searchText.value.toLowerCase())
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

const categoriesId = document.querySelector("#categories");
const categoryItems = categoriesId.querySelectorAll(".item");
console.log(`Number of category: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});

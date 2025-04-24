const categoriesBlock = document.querySelector(".categories-nav");
const productsBlock = document.querySelector("#products");
const productInfoBlock = document.querySelector("#product-info");
const buttonBuy = document.querySelector(".product-buy");

const products = {
  laptops: [
    {
      id: 1,
      name: "MacBook Air sky blue",
      extension: "13 inch",
      memory: "24GB",
      storage: "512GB",
      color: "sky blue",
      price: 1399,
    },
    {
      id: 2,
      name: "MacBook Air starlight",
      extension: "15 inch",
      memory: "24GB",
      storage: "512GB",
      color: "starlight",
      price: 1599,
    },
    {
      id: 3,
      name: "MacBook Pro space black",
      extension: "14 inch",
      memory: "16GB",
      storage: "1TB",
      color: "space black",
      price: 1799,
    },
    {
      id: 4,
      name: "MacBook Pro silver",
      extension: "16 inch",
      memory: "48GB",
      storage: "512GB",
      color: "silver",
      price: 2899,
    },
    {
      id: 5,
      name: "iMac blue",
      extension: "24 inch",
      memory: "16GB",
      storage: "256GB",
      color: "blue",
      price: 1499,
    },
  ],
  phones: [
    {
      id: 1,
      name: "iPhone 16 Pro",
      storage: "256GB",
      color: "blue",
      price: 1499,
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      storage: "256GB",
      color: "silver",
      price: 1999,
    },
  ],
  earphones: [
    {
      id: 1,
      name: "AirPods 1st generation",
      price: 150,
    },
    {
      id: 2,
      name: "AirPods Pro",
      price: 499,
    },
  ],
};

/// Categories ///

categoriesBlock.addEventListener("click", function (event) {
  if (event.target.classList.contains("categories-link")) {
    event.preventDefault();

    generateProductsList(event.target.id);

    showElement(productsBlock);
    hideElement(productInfoBlock);
  }
});

function generateProductsList(category) {
  const ulProductsList = document.querySelector(".products-list");
  ulProductsList.innerHTML = "";
  ulProductsList.style.listStyleType = "none";

  const productsArray = products[category];
  productsArray.forEach((product) => {
    const li = document.createElement("li");
    li.className = "products-item";

    const link = document.createElement("a");
    link.className = "products-link";
    link.setAttribute("data-id", product.id);
    link.setAttribute("data-category", category);
    link.href = "#";
    link.textContent = product.name;

    li.appendChild(link);
    ulProductsList.appendChild(li);
  });
}

/// List of products ///

productsBlock.addEventListener("click", function (event) {
  if (event.target.classList.contains("products-link")) {
    event.preventDefault();

    const id = event.target.getAttribute("data-id");
    const category = event.target.getAttribute("data-category");

    const productInfo = products[category].find((product) => product.id == id);

    const ulProductInfo = document.querySelector(".product-detailed-info");
    ulProductInfo.innerHTML = "";

    for (let key in productInfo) {
      if (key === "id") continue;

      const li = document.createElement("li");
      li.className = "product-description-item";

      const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
      if (key === "price") {
        li.textContent = `${formattedKey}: ${productInfo[key]} EUR`;
      } else {
        li.textContent = `${formattedKey}: ${productInfo[key]}`;
      }

      ulProductInfo.appendChild(li);
    }

    showElement(productInfoBlock);
  }
});

buttonBuy.addEventListener("click", function () {
  alert(`Product was purchased!`);
  hideElement(productsBlock);
  hideElement(productInfoBlock);
});

/// Common functions ///

function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}

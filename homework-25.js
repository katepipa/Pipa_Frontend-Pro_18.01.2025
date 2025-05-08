const categoriesBlock = document.querySelector(".categories");
const categoriesNav = document.querySelector(".categories-nav");
const productsBlock = document.querySelector("#products");
const productInfoBlock = document.querySelector("#product-info");
const buttonBuy = document.querySelector(".product-buy");

const form = document.querySelector("form");
const formBloc = document.querySelector(".form-bloc");

let selectedProduct = null;

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

/// List of products ///

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

/// Product description ///

productsBlock.addEventListener("click", function (event) {
  if (event.target.classList.contains("products-link")) {
    event.preventDefault();

    const id = event.target.getAttribute("data-id");
    const category = event.target.getAttribute("data-category");

    const productInfo = products[category].find((product) => product.id == id);
    selectedProduct = productInfo;

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

/// Show form ///

buttonBuy.addEventListener("click", function () {
  showElement(formBloc);
});

/// Form validation ///

form.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();

  let hasError = false;

  document
    .querySelectorAll(".error-messge")
    .forEach((element) => (element.textContent = ""));

  const name = document.getElementById("name");
  const surname = document.getElementById("surname");
  const city = document.getElementById("city");
  const warehouse = document.getElementById("warehouse");
  const paymentMethod = document.querySelector("input[name='payment']:checked");

  if (!name.value.trim()) {
    hasError = true;
    document.getElementById("error-name").textContent = "Enter your name!";
  }
  if (!surname.value.trim()) {
    hasError = true;
    document.getElementById("error-surname").textContent =
      "Enter your surname!";
  }
  if (city.value === "") {
    hasError = true;
    document.getElementById("error-city").textContent = "Enter your city!";
  }
  if (!warehouse.value.trim()) {
    hasError = true;
    document.getElementById("error-warehouse").textContent =
      "Enter address of Nova Poshta warehouse!";
  }
  if (!paymentMethod) {
    hasError = true;
    document.getElementById("error-payment").textContent =
      "Choose payment method!";
  }

  if (hasError) {
    return;
  }

  const orderInfo = {
    name: name.value.trim(),
    surname: surname.value.trim(),
    city: city.options[city.selectedIndex].text,
    warehouse: warehouse.value.trim(),
    payment: paymentMethod.value,
    quantity: document.getElementById("quantity").value,
    commentary: document.getElementById("commentary").value.trim(),
  };

  hideElement(formBloc);
  hideElement(categoriesBlock);
  hideElement(productsBlock);
  hideElement(productInfoBlock);
  displayOrderSummary(orderInfo);
}

/// Order Summary ///

function displayOrderSummary(orderInfo) {
  const orderSummaryBlock = document.querySelector("#order-summary");
  let productDetails = "";

  for (let key in selectedProduct) {
    if (key === "id") continue;

    const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
    const value =
      key === "price" ? `${selectedProduct[key]} EUR` : selectedProduct[key];
    productDetails += `<li><span class="label-decoration">${formattedKey}:</span> ${value}</li>`;
  }

  const commentaryItem =
    orderInfo.commentary && orderInfo.commentary.trim()
      ? `<li><span class="label-decoration">Commentary:</span> ${orderInfo.commentary.trim()}</li>`
      : "";

  orderSummaryBlock.innerHTML = `
    <h2>Your Order Summary:</h2>
    <div class="order-info">
      <ul class="delivery-info">
        <li><span class="label-decoration">Name:</span> ${orderInfo.name}</li>
        <li><span class="label-decoration">Surname:</span> ${orderInfo.surname}</li>
        <li><span class="label-decoration">City:</span> ${orderInfo.city}</li>
        <li><span class="label-decoration">Nova Poshta Warehouse:</span> ${orderInfo.warehouse}</li>
        <li><span class="label-decoration">Payment method:</span> ${orderInfo.payment}</li>
        <li><span class="label-decoration">Quantity:</span> ${orderInfo.quantity}</li>
        ${commentaryItem}
      </ul>
      <h3>Product you have ordered:</h3>
      <ul class="product-info-list">
        ${productDetails}
      </ul>
    </div>
  `;

  showElement(orderSummaryBlock);
}

/// Common functions ///

function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}

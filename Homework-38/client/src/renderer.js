export function renderProducts(category, productList) {
  const container = document.getElementById(category);
  container.innerHTML = "";

  productList.forEach((product) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    card.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Price: ${product.price.toFixed(2)} EUR</p>
          <button 
            class="btn btn-success mt-auto" 
            data-id="${product.id}" 
            data-category="${category}"
          >
            Add to order
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

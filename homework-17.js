const rozetkaShop = [
{
  category: 'Mobile phones',
  goods: [
    {id: 1, brand: 'Samsung', name: 'Galaxy M35', storage: '128GB', color: 'Gray', price: 8999, inStock: true},
    {id: 2, brand: 'Samsung', name: 'Galaxy M35', storage: '128GB', color: 'Light Blue', price: 8999, inStock: false},
    {id: 3, brand: 'Apple', name: 'iPhone 16 Pro', storage: '512GB', color: 'Desert Titanium', price: 72499, inStock: true},
    {id: 4, brand: 'Apple', name: 'iPhone 15 Plus', storage: '128GB', color: 'Pink', price: 39999, inStock: true},
    {id: 5, brand: 'Nubia', name: 'V60 Design 6', storage: '256GB', color: 'Purple', price: 5299, inStock: true},
    {id: 6, brand: 'Nubia', name: 'V60 Design 6', storage: '256GB', color: 'Blue', price: 5299, inStock: false},
    {id: 7, brand: 'Samsung', name: 'Galaxy A06 4', storage: '128GB', color: 'Light Blue', price: 4599, inStock: false},
    {id: 8, brand: 'Samsung', name: 'Galaxy A06 4', storage: '128GB', color: 'Gold', price: 4599, inStock: true},
  ]
},
{
  category: 'Gaming monitors',
  goods: [
    {id: 9, brand: 'Samsung', name: 'S27C330', displayDiagonal: 27, color: 'Black', price: 4999, inStock: true},
    {id: 10, brand: 'Samsung', name: 'S24C330', displayDiagonal: 23.8, color: 'Black', price: 3999, inStock: false},
    {id: 11, brand: 'ASUS', name: 'TUF Gaming VG27VQM1B', displayDiagonal: 27, color: 'Black', price: 8999, inStock: true},
    {id: 12, brand: 'ASUS', name: 'TUF Gaming VG34VQL3A', displayDiagonal: 34, color: 'Black', price: 14599, inStock: true},
    {id: 13, brand: 'Lenovo', name: 'Legion R27i-30', displayDiagonal: 27, color: 'Black', price: 7999, inStock: true},
    {id: 14, brand: 'Gigabyte', name: 'M27QA', displayDiagonal: 27, color: 'Black', price: 11599, inStock: false},
    {id: 15, brand: 'Gigabyte', name: 'M27QA ICE', displayDiagonal: 27, color: 'White', price: 11999, inStock: true},
    {id: 16, brand: 'Samsung', name: 'Odyssey OLED G6', displayDiagonal: 27, color: 'Silver', price: 33999, inStock: true},
    {id: 17, brand: 'Philips', name: 'Evnia 27M2N8500/00', displayDiagonal: 26.5, color: 'Silver', price: 28549, inStock: false}
  ]
},
{
  category: 'Washing machines',
  goods: [
    {id: 18, brand: 'ARDESTO', name: 'WMW-6100WB', capacityKg: 6, maxSpinSpeed: 1200, color: 'Gray', price: 9333, inStock: true},
    {id: 19, brand: 'INDESIT', name: 'IM 602B MY TIME', capacityKg: 6, maxSpinSpeed: 1200, color: 'White', price: 12222, inStock: true},
    {id: 20, brand: 'INDESIT', name: 'OMTWSC 51052 W', capacityKg: 5, maxSpinSpeed: 1000, color: 'White', price: 10499, inStock: false},
    {id: 21, brand: 'SAMSUNG', name: 'WW11B1504CABUA', capacityKg: 7, maxSpinSpeed: 1300, color: 'Black', price: 53727, inStock: false},
    {id: 22, brand: 'WHIRLPOOL', name: 'FFWDB 976258 BV UA', capacityKg: 9, maxSpinSpeed: 1600, color: 'White', price: 24999, inStock: true},
    {id: 23, brand: 'Grifon', name: 'GWM-7123DDBg', capacityKg: 7, maxSpinSpeed: 1200, color: 'Creamy', price: 12999, inStock: true},
    {id: 24, brand: 'Edler', name: 'EWF6031BL', capacityKg: 6, maxSpinSpeed: 1000, color: 'Gray', price: 9999, inStock: true}
  ]
}
];

function getListOfGoods () {
  rozetkaShop.forEach(category => {
    console.log(`Category: ${category.category}`);

    category.goods.forEach(product => {
      let generalProductInfo = `ID: ${product.id}, Brand: ${product.brand}, Name: ${product.name}, `;

      switch (category.category) {
        case 'Mobile phones':
          if (product.storage) {
            generalProductInfo += `Storage: ${product.storage}, `;
          }
          break;

        case 'Gaming monitors':
          if (product.displayDiagonal) {
            generalProductInfo += `Display diagonal: ${product.displayDiagonal} inches, `;
          }
          break;

        case 'Washing machines':
          if (product.capacityKg) {
            generalProductInfo += `Capacity: ${product.capacityKg} kg, `;
          }
          if (product.maxSpinSpeed) {
            generalProductInfo += `Max spin speed: ${product.maxSpinSpeed}, `;
          }
          break;

        default:
          break;
      }

      generalProductInfo += `Color: ${product.color}, Price: ${product.price}, In Stock: ${product.inStock}`;

      console.log(generalProductInfo);
    });
  });
}

function getFinalPurchasePrice () {
  let goodsCategory = Number(prompt(`Choose a number of category:\n
     Press 1 - Mobile phones\n 
     Press 2 - Gaming monitors\n 
     Press 3 - Washing machines`));

  let selectedCategoryName = '';

  if (goodsCategory !== null && !isNaN(goodsCategory) && /^\d{1,3}$/.test(goodsCategory)) {
    let goodsAssortment = '';
    let goodsInStock = false;

    rozetkaShop.forEach((category, index) => {
      if (goodsCategory === index + 1) {
        selectedCategoryName = category.category;

        goodsAssortment += `Select a product ID from Category: ${selectedCategoryName}\n`;

        category.goods.forEach(product => {
          let productInfo = `ID: ${product.id}, Brand: ${product.brand}, Name: ${product.name}, `;

          switch(category.category) {
            case 'Mobile phones':
              if (product.storage) {
                productInfo += `Storage: ${product.storage}, `;
              }
              break;
      
            case 'Gaming monitors':
              if (product.displayDiagonal) {
                productInfo += `Display diagonal: ${product.displayDiagonal} inches, `;
              }
              break;
      
            case 'Washing machines':
              if (product.capacityKg) {
                productInfo += `Capacity: ${product.capacityKg} kg, `;
              }
              if (product.maxSpinSpeed) {
                productInfo += `Max spin speed: ${product.maxSpinSpeed}, `;
              }
              break;
      
            default:
              break;
          }

          productInfo += `Color: ${product.color}, Price: ${product.price}, In Stock: ${product.inStock}`;

          goodsAssortment += productInfo + '\n';
          if (product.inStock) {
            goodsInStock = true;
          }
        });
      }
    });

    if (goodsAssortment) {
      alert(goodsAssortment);
    } else {
      alert('Invalid category number or no goods available');
    }

    let goodsId = Number(prompt(`Enter the goods ID`));
    let numberOfGoods = Number(prompt(`Enter the number of goods`));

    if (!goodsId || !/^\d{1,24}$/.test(goodsId)) {
      console.log(`The product ID must be a number up to 24 digits long! Try again please`);
    } else if (!numberOfGoods || isNaN(numberOfGoods) || numberOfGoods <= 0) {
      alert(`The quantity of the product must be a positive number! Try again please`);
    } else {
      let goodsFound = false;
      let finalPrice = 0;
      let discountedPrice = 0;
      const discountInPercent = 20;

      let purchaseInvoice = `Description of your order: \n Category: ${selectedCategoryName} \n ID: ${goodsId} \n Quantity: ${numberOfGoods} \n`;

      rozetkaShop.forEach(category => {
        category.goods.forEach(product=> {
          if (product.id === goodsId) {
            goodsFound = true;

            if (!product.inStock) {
              alert(`The product with ID ${goodsId} is out of stock`);
            } else {
              finalPrice = product.price * numberOfGoods;
              if (finalPrice > 10000) {
                discountedPrice = finalPrice - ((finalPrice * discountInPercent) / 100);
                alert(`${purchaseInvoice} Discount: ${discountInPercent} % (The amount of your order is more than 10 000 UAH so you have got a discount) \n To pay: ${discountedPrice} UAH`);
              } else {
                alert(`${purchaseInvoice} To pay: ${finalPrice}`);
              }
            }
          } 
        });
      });

      if (!goodsFound) {
        alert(`No product found with ID ${goodsId}`);
      }
    }
  } else {
    alert(`You have incorrectly selected the product category. To do this, enter a number from 1 to 3 that corresponds to the category name`);
  } 
}

getListOfGoods();
getFinalPurchasePrice();
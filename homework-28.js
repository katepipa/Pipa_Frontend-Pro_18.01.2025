/// Human ///
function Human(name, surname, birthday) {
  this.name = name;
  this.surname = surname;

  let _birthday = birthday;

  Object.defineProperty(this, "fullName", {
    get: function () {
      return `${this.name} ${this.surname}`;
    },

    set: function (name) {
      const nameArray = name.split(" ");
      this.name = nameArray[0];
      this.surname = nameArray[1];
    },
  });

  Object.defineProperty(this, "age", {
    get: function () {
      const today = new Date();
      let age = today.getFullYear() - _birthday.getFullYear();
      const month = today.getMonth() - _birthday.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < _birthday.getDate())) {
        age--;
      }
      return age;
    },
  });

  Object.defineProperty(this, "birthday", {
    get: function () {
      return _birthday;
    },

    set: function (value) {
      if (value instanceof Date) {
        _birthday = value;
      }
    },
  });

  this.getInfo = function () {
    return `Name: ${this.fullName}, \nBirthday: ${this.birthday}, \nAge: ${this.age}`;
  };
}

let student = new Human("Kateryna", "Pipa", new Date(2002, 11, 16));
console.log(student.getInfo());

student.fullName = "Luka Zahorodnii";
student.birthday = new Date(2006, 5, 10);
console.log(student.getInfo());

/// Car ///
function Car({
  brand,
  model,
  color,
  state,
  bodyType,
  gearBox,
  vinCode,
  year,
  price,
  owner,
}) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.state = state;
  this.bodyType = bodyType;
  this.gearBox = gearBox;
  this.owner = owner || null;

  let _vinCode = vinCode;
  let _year = year;
  let _price = price;

  Object.defineProperty(this, "year", {
    get: function () {
      return _year;
    },

    set: function (value) {
      if (value >= 1886 && value <= new Date().getFullYear()) {
        _year = value;
      } else {
        alert("Invalid year of manufacture");
      }
    },
  });

  Object.defineProperty(this, "vinCode", {
    get: function () {
      return _vinCode;
    },

    set: function (value) {
      if (typeof value === "string" && value.length === 17) {
        _vinCode = value;
      } else {
        alert("Invalid Vin-code");
      }
    },
  });

  Object.defineProperty(this, "price", {
    get: function () {
      return `${_price} EUR`;
    },

    set: function (value) {
      if (value === 0 || value < 0) {
        alert("Invalid price");
      } else {
        _price = value;
      }
    },
  });

  this.showCarInfo = function () {
    const carInfoBlock = document.querySelector(".car-info");

    if (carInfoBlock) {
      carInfoBlock.innerText = `
    Vin Code: ${this.vinCode} 
    \nYear of manufacture: ${this.year}
    \nBrand: ${this.brand}
    \nModel: ${this.model}
    \nPrice: ${this.price}
    \nColor: ${this.color}
    \nState: ${this.state}
    \nBody Type: ${this.bodyType}
    \nGear Box: ${this.gearBox}
    \nOwner: ${
      this.owner
        ? this.owner.fullName + ", " + this.owner.age + " y.o."
        : "no owner"
    }`;
    }
  };

  this.addOwner = function (ownerObj) {
    if (this.owner === null) {
      this.owner = ownerObj;
    } else {
      alert("This car already has an owner");
    }
  };
}

document.getElementById("carForm").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const ownerName = document.getElementById("ownerName").value.trim();
  const ownerSurname = document.getElementById("ownerSurname").value.trim();
  const ownerBirthday = document.getElementById("ownerBirthday").value;

  const brand = document.getElementById("brand").value.trim();
  const model = document.getElementById("model").value.trim();
  const color = document.getElementById("color").value.trim();
  const state = document.getElementById("state").value.trim();
  const bodyType = document.getElementById("bodyType").value.trim();
  const gearBox = document.getElementById("gearBox").value.trim();
  const vinCode = document.getElementById("vinCode").value.trim();
  const year = parseInt(document.getElementById("year").value);
  const price = parseFloat(document.getElementById("price").value);

  if (
    ownerName === "" ||
    ownerSurname === "" ||
    ownerBirthday === "" ||
    brand === "" ||
    model === "" ||
    color === "" ||
    state === "" ||
    bodyType === "" ||
    gearBox === "" ||
    vinCode === "" ||
    isNaN(year) ||
    isNaN(price)
  ) {
    alert("Please fill in all fields!");
    return;
  }

  const today = new Date();
  const birthDate = new Date(ownerBirthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 18) {
    alert("The owner must be over 18 years old");
    return;
  }

  if (year < 1886 || year > new Date().getFullYear()) {
    alert(
      "Invalid year of manufacture! Year must be between 1886 and current year"
    );
    return;
  }

  const owner = new Human(ownerName, ownerSurname, birthDate);
  const car = new Car({
    brand,
    model,
    color,
    state,
    bodyType,
    gearBox,
    vinCode,
    year,
    price,
    owner,
  });

  car.showCarInfo();
}

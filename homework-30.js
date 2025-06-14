let apartmentsNumber = 0;
let residentsPerApartment = 0;

const buildingForm = document.getElementById("buildingForm");
const residentsFormContainer = document.getElementById(
  "residentsFormContainer"
);
const output = document.getElementById("output");
let currentBuilding = null;

class Resident {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Apartment {
  constructor(number, area, rooms) {
    this.number = number;
    this.area = area;
    this.rooms = rooms;
    this.residents = [];
  }

  addResident(resident) {
    this.residents.push(resident);
  }

  getResidentsCount() {
    return this.residents.length;
  }

  getResidentsName() {
    return this.residents.map((resident) => resident.getFullName());
  }
}

class ApartmentBuilding {
  constructor(address, floors) {
    this.address = address;
    this.floors = floors;
    this.apartments = [];
  }

  addApartment(apartment) {
    this.apartments.push(apartment);
  }

  getAllResidents() {
    return this.apartments.flatMap((apartment) => apartment.residents);
  }

  getTotalArea() {
    return this.apartments.reduce((sum, apartment) => sum + apartment.area, 0);
  }
}

buildingForm.addEventListener("submit", showNextForm);

function showNextForm(event) {
  event.preventDefault();

  residentsFormContainer.innerHTML = "";
  output.innerHTML = "";

  const address = document.getElementById("address").value.trim();
  const floors = parseInt(document.getElementById("floors").value);
  apartmentsNumber = parseInt(
    document.getElementById("apartmentsNumber").value
  );
  residentsPerApartment = parseInt(
    document.getElementById("residentsNumber").value
  );

  if (!address || !floors || !apartmentsNumber || !residentsPerApartment) {
    alert("Please fill in all fields!");
    return;
  }

  const form = document.createElement("form");
  form.id = "residentsDataForm";

  for (let i = 1; i <= apartmentsNumber; i++) {
    const aptBlock = document.createElement("div");
    aptBlock.innerHTML = `<h3>Apartment #${i}</h3>`;

    for (let j = 1; j <= residentsPerApartment; j++) {
      aptBlock.innerHTML += `
        <label>Name:</label>
        <input type="text" name="name-${i}-${j}" required />
        <label>Surname:</label>
        <input type="text" name="surname-${i}-${j}" required />
        <label>Age:</label>
        <input type="number" name="age-${i}-${j}" required /><br/>
      `;
    }

    form.appendChild(aptBlock);
  }

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Create Building";
  form.appendChild(submitBtn);

  form.addEventListener("submit", showOutput);
  residentsFormContainer.appendChild(form);
}

function showOutput(event) {
  event.preventDefault();
  const form = event.target;

  const address = document.getElementById("address").value.trim();
  const floors = parseInt(document.getElementById("floors").value);

  const building = new ApartmentBuilding(address, floors);

  for (let i = 1; i <= apartmentsNumber; i++) {
    const apt = new Apartment(i, 50 + i * 5, 2 + (i % 3));

    for (let j = 1; j <= residentsPerApartment; j++) {
      const name = form[`name-${i}-${j}`].value.trim();
      const surname = form[`surname-${i}-${j}`].value.trim();
      const age = parseInt(form[`age-${i}-${j}`].value);

      if (!name || !surname || !age) {
        alert("Please fill in all resident fields!");
        return;
      }

      const res = new Resident(name, surname, age);
      apt.addResident(res);
    }

    building.addApartment(apt);
  }

  currentBuilding = building;
  residentsFormContainer.innerHTML = "";

  const viewBtn = document.createElement("button");
  viewBtn.textContent = "Show Building Info";
  viewBtn.addEventListener("click", () => showBuildingInfo(building));
  output.innerHTML = "<p>Building was created successfully!</p>";
  output.appendChild(viewBtn);
}

function showBuildingInfo(building) {
  output.innerHTML = `
    <h2>Building at ${building.address}</h2>
    <p><strong>Floors:</strong> ${building.floors}</p>
    <p><strong>Total apartments:</strong> ${building.apartments.length}</p>
    <p><strong>Total residents:</strong> ${
      building.getAllResidents().length
    }</p>
    <p><strong>Total area:</strong> ${building.getTotalArea()} m²</p>
    <h3>Residents list:</h3>
    <ul>
      ${building
        .getAllResidents()
        .map((res) => `<li>${res.getFullName()}, ${res.age} y.o.</li>`)
        .join("")}
    </ul>
  `;
}

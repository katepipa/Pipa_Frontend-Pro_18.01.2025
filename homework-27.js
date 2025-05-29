const userDataBlock = document.querySelector(".user-data");
const editUserDataBlock = document.querySelector(".edit-user-data");

const addUserButton = document.getElementById("add-user-button");
const form = document.getElementById("edit-user-form");

let listOfUsers = [
  {
    id: 1,
    name: "Kateryna",
    surname: "Pipa",
    age: 22,
    city: "Dnipro",
    email: "katepipa12@gmail.com",
    address: "Troitskaya 35",
  },
  {
    id: 2,
    name: "Yelyzaveta",
    surname: "Pipa",
    age: 20,
    city: "Dnipro",
    email: "lizapipa@gmail.com",
    address: "Kalynova 7",
  },
  {
    id: 3,
    name: "Luka",
    surname: "Zahorodnii",
    age: 18,
    city: "Kyiv",
    email: "lukazahorodnii@gmail.com",
    address: "Schevchenko 19",
  },
];

const storedUsers = localStorage.getItem("users");
if (storedUsers) {
  listOfUsers = JSON.parse(storedUsers);
}

function renderUsersTable() {
  const table = document.getElementById("users-table");

  table.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Surname</th>
      <th>E-mail</th>
      <th>Actions</th>
    </tr>
  `;

  listOfUsers.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.surname}</td>
      <td>${user.email}</td>
      <td>
        <div class="action-buttons">
          <button class="btn btn-small btn-view" data-id="${user.id}">View</button>
          <button class="btn btn-small btn-edit" data-id="${user.id}">Edit</button>
          <button class="btn btn-small btn-delete" data-id="${user.id}">Delete</button>
        </div>
      </td>
    `;
    table.appendChild(row);
  });
}

function defineAction(event) {
  if (event.target.classList.contains("btn-view")) {
    const userId = event.target.dataset.id;
    viewUsersData(userId);
  } else if (event.target.classList.contains("btn-edit")) {
    const userId = event.target.dataset.id;
    editUsersData(userId);
  } else if (event.target.classList.contains("btn-delete")) {
    const userId = event.target.dataset.id;
    deleteUsersData(userId);
  }
}

/// View function///

function viewUsersData(userId) {
  hideElement(editUserDataBlock);
  const user = listOfUsers.find((user) => user.id === Number(userId));

  if (!user) {
    userDataBlock.innerHTML = "<p>User was not found.</p>";
    return;
  }

  userDataBlock.innerHTML = `
  <h3>User data:</h3>
   <div class="user-info">
      <ul class="user-info-list">
        <li><span class="label-decoration">Name:</span> ${user.name}</li>
        <li><span class="label-decoration">Surname:</span> ${user.surname}</li>
        <li><span class="label-decoration">Age:</span> ${user.age}</li>
        <li><span class="label-decoration">City:</span> ${user.city}</li>
        <li><span class="label-decoration">E-mail:</span> ${user.email}</li>
        <li><span class="label-decoration">Address:</span> ${user.address}</li>
      </ul>
    </div>
    <div class="close-button-wrapper">
        <button class="btn btn-small btn-close">Close</button>
    </div>
  `;

  showElement(userDataBlock);

  const buttonClose = userDataBlock.querySelector(".btn-close");
  buttonClose.addEventListener("click", () => {
    hideElement(userDataBlock);
  });
}

/// Edit function///

function editUsersData(userId) {
  hideElement(userDataBlock);
  const user = listOfUsers.find((user) => user.id === Number(userId));

  if (!user) {
    userDataBlock.innerHTML = "<p>User was not found.</p>";
    return;
  }

  showElement(editUserDataBlock);

  document.getElementById("name").value = user.name;
  document.getElementById("surname").value = user.surname;
  document.getElementById("age").value = user.age;
  document.getElementById("city").value = user.city;
  document.getElementById("email").value = user.email;
  document.getElementById("address").value = user.address;
  document.getElementById("edit-user-form").dataset.userId = user.id;
}

/// Delete function///

function deleteUsersData(userId) {
  hideElement(userDataBlock);
  hideElement(editUserDataBlock);
  const index = listOfUsers.findIndex((user) => user.id === Number(userId));

  if (index === -1) {
    userDataBlock.innerHTML = "<p>User was not found.</p>";
    return;
  }

  const user = listOfUsers[index];
  if (
    !confirm(
      `Are you sure you want to delete user ${user.name} ${user.surname}?`
    )
  ) {
    return;
  }

  listOfUsers.splice(index, 1);

  renderUsersTable();
  localStorage.setItem("users", JSON.stringify(listOfUsers));
}

/// Form Validation ///

function getValidatedFormData() {
  let hasError = false;

  document
    .querySelectorAll(".error-message")
    .forEach((element) => (element.textContent = ""));

  const name = document.getElementById("name");
  const surname = document.getElementById("surname");
  const age = document.getElementById("age");
  const city = document.getElementById("city");
  const email = document.getElementById("email");
  const address = document.getElementById("address");

  if (!name.value.trim()) {
    hasError = true;
    document.getElementById("error-name").textContent = "Enter your name!";
  }
  if (!surname.value.trim()) {
    hasError = true;
    document.getElementById("error-surname").textContent =
      "Enter your surname!";
  }
  if (!age.value.trim() || Number(age.value) <= 0) {
    hasError = true;
    document.getElementById("error-age").textContent = "Enter your age!";
  }
  if (city.value === "") {
    hasError = true;
    document.getElementById("error-city").textContent = "Enter your city!";
  }
  if (!email.value.trim()) {
    hasError = true;
    document.getElementById("error-email").textContent = "Enter your email!";
  }
  if (!address.value.trim()) {
    hasError = true;
    document.getElementById("error-address").textContent =
      "Choose your address!";
  }

  if (hasError) {
    return null;
  }

  return {
    name: name.value.trim(),
    surname: surname.value.trim(),
    age: Number(age.value),
    city: city.options[city.selectedIndex].text,
    email: email.value.trim(),
    address: address.value.trim(),
  };
}

function formValidation(event) {
  event.preventDefault();

  const formData = getValidatedFormData();
  if (!formData) return;

  const userId = Number(form.dataset.userId);
  const isEdit = !isNaN(userId);

  if (isEdit) {
    const userIndex = listOfUsers.findIndex((user) => user.id === userId);
    if (userIndex === -1) return;

    listOfUsers[userIndex] = { id: userId, ...formData };
  } else {
    const newId = listOfUsers.length
      ? Math.max(...listOfUsers.map((user) => user.id)) + 1
      : 1;
    listOfUsers.push({ id: newId, ...formData });
  }

  renderUsersTable();
  localStorage.setItem("users", JSON.stringify(listOfUsers));
  hideElement(editUserDataBlock);
}

/// Add New User ///

function addNewUser() {
  showElement(editUserDataBlock);

  form.reset();
  delete form.dataset.userId;

  const addUserHeading = form.querySelector(".form-heading");
  addUserHeading.textContent = "Enter new user's data:";
}

/// Common functions ///

function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}

/// Event Listeners ///

const table = document.getElementById("users-table");
table.addEventListener("click", defineAction);

form.addEventListener("submit", formValidation);

addUserButton.addEventListener("click", addNewUser);

renderUsersTable();

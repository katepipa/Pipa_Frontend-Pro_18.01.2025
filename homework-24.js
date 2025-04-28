const form = document.querySelector("form");
const formBlock = document.querySelector(".form-block");
const languagesCheckboxes = document.querySelectorAll('input[name="language"]');

const dataArray = [];
const LANGUAGE_NAMES = ["Ukrainian", "English", "German", "French", "Spanish"];
const CITY_NAMES = [
  "Kyiv",
  "Kharkiv",
  "Odesa",
  "Dnipro",
  "Zaporizhzhia",
  "Lviv",
  "Ivano-Frankivsk",
  "Vinnytsia",
  "Uzhhorod",
  "Cherkasy",
];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!checkLanguageSelection()) {
    return;
  }

  hideElement(form);
  formBlock.style.all = "unset";
  formBlock.style.marginRight = "auto";
  formBlock.style.marginLeft = "auto";

  const formData = new FormData(form);
  dataArray.length = 0;

  for (let [key, value] of formData.entries()) {
    if (key === "language") {
      continue;
    }

    if (key === "gender") {
      value = value === "0" ? "Man" : "Woman";
    }

    if (key === "city") {
      const cityIndex = parseInt(value, 10);
      value = CITY_NAMES[cityIndex] || value;
    }

    dataArray.push({ key, value });
  }

  const selectedLanguages = getSelectedLanguages();
  if (selectedLanguages.length > 0) {
    dataArray.push({ key: "language", value: selectedLanguages.join(", ") });
  }

  createTable();
});

/// Table ///

function createTable() {
  let table = document.createElement("table");
  table.style.border = "3px solid #8E1450";
  table.setAttribute("cellpadding", "15");

  let tBody = document.createElement("tbody");
  table.appendChild(tBody);

  for (let i = 0; i < dataArray.length; i++) {
    let tableRow = document.createElement("tr");
    tBody.appendChild(tableRow);

    const formattedKey =
      dataArray[i].key.charAt(0).toUpperCase() + dataArray[i].key.slice(1);
    let tableCellKey = document.createElement("td");
    tableCellKey.textContent = formattedKey;
    tableCellKey.style.border = "1px solid #8E1450";
    tableCellKey.style.textAlign = "center";

    let tableCellValue = document.createElement("td");
    tableCellValue.textContent = dataArray[i].value;
    tableCellValue.style.border = "1px solid #8E1450";
    tableCellValue.style.textAlign = "center";

    tableRow.appendChild(tableCellKey);
    tableRow.appendChild(tableCellValue);
  }

  formBlock.innerHTML = "";
  formBlock.appendChild(table);
}

/// Hide element ///

function hideElement(element) {
  element.classList.add("hidden");
}

/// Language Selection ///

function checkLanguageSelection() {
  for (let checkbox of languagesCheckboxes) {
    if (checkbox.checked) {
      return true;
    }
  }

  alert("Please select at least one language!");
  formBlock.innerHTML = "";
  formBlock.appendChild(form);
  return false;
}

function getSelectedLanguages() {
  const selectedLanguages = [];

  for (let checkbox of languagesCheckboxes) {
    if (checkbox.checked) {
      const languageIndex = parseInt(checkbox.value, 10);
      selectedLanguages.push(LANGUAGE_NAMES[languageIndex]);
    }
  }

  return selectedLanguages;
}

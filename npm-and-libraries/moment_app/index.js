const button = document.querySelector("button");
const textarea = document.querySelector("textarea");
moment.locale("uk");

button.addEventListener("click", function () {
  const birthdayDate = moment("2002-12-16", "YYYY-MM-DD");
  textarea.value = birthdayDate.format("dddd, LL");
});

const enterButton = document.querySelector("#user-birthday");
const userTextarea = document.querySelector("#user-birthday-date");

enterButton.addEventListener("click", function () {
  const userInput = userTextarea.value.trim();
  const parsedDate = moment(userInput, "DD.MM.YYYY", true);

  if (parsedDate.isValid) {
    userTextarea.value = parsedDate.format("dddd, LL");
  } else {
    userTextarea.value =
      "Not coorect format. Enter your date of Birth in format DD.MM.YYYY";
  }
});

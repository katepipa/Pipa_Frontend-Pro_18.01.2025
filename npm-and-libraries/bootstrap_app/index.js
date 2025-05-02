/// Modal + Tooltip ///
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));

  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  document
    .getElementById("openModalBtn")
    .addEventListener("click", function () {
      modal.show();
    });
});

/// Alert ///
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
let alertVisible = false;

const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("custom-alert-wrapper");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    if (!alertVisible) {
      appendAlert("Nice, you triggered this alert message!", "success");
      alertVisible = true;
    } else {
      const existingAlert = document.querySelector(".custom-alert-wrapper");
      if (existingAlert) existingAlert.remove();
      alertVisible = false;
    }
  });
}

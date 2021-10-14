const myModal = document.getElementById("modalNewOrder");
const myInput = document.getElementById("inputTable");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

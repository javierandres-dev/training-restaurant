"use strict";
const d = document,
  $newOrder = d.getElementById("newOrder"),
  $table = d.getElementById("table"),
  $time = d.getElementById("time"),
  $createOrder = d.getElementById("createOrder");

const customer = {
  table: "",
  time: "",
  order: [],
};

$newOrder.addEventListener("shown.bs.modal", () => $table.focus());
$createOrder.addEventListener("submit", createOrder, false);

function createOrder(e) {
  e.preventDefault();
  if (!$createOrder.checkValidity()) e.stopPropagation();
  else {
    const table = $table.value,
      time = $time.value;
    console.log(table, time);
  }
  $createOrder.classList.add("was-validated");
}

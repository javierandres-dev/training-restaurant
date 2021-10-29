"use strict";
const d = document,
  $newOrder = new bootstrap.Modal(document.getElementById("newOrder"), {
    backdrop: "static",
    focus: true,
    keyboard: true,
  }),
  $table = d.getElementById("table"),
  $time = d.getElementById("time"),
  $createOrder = d.getElementById("createOrder"),
  $hiddenSections = d.querySelectorAll(".d-none"),
  $dishes = d.getElementById("dishes");

let customer = {
  table: "",
  time: "",
  orders: [],
};

$createOrder.addEventListener("submit", createOrder);

function createOrder(e) {
  e.preventDefault();
  if (!$createOrder.checkValidity()) e.stopPropagation();
  else {
    const table = $table.value,
      time = $time.value;
    customer = {
      ...customer,
      table,
      time,
    };
    getDishes();
    showHiddenSections();
    $newOrder.hide();
  }
  $createOrder.classList.add("was-validated");
}

function showDishes(dishes) {
  console.log(dishes);
  let html = "";
  dishes.forEach((dish)=>{
    html += `<li>${dish.name}</li>`
  });
  $dishes.innerHTML = html;
}

async function getDishes() {
  const URL = "http://localhost:4000/dishes";

  try {
    const res = await fetch(URL);
    if (res.status !== 200)
      throw new Error(res.statusText || "¡An error has occurred!");
    const json = await res.json();
    showDishes(json);
  } catch (error) {
    console.error(error);
  }
}

function showHiddenSections() {
  $hiddenSections.forEach((section) => section.classList.remove("d-none"));
}

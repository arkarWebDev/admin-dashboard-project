$(document).ready(function () {
  $("#example").DataTable();
});

let max_btn = document.querySelector(".max-btn");
let card = document.querySelector(".tb-card-div");

max_btn.addEventListener("click", (_) => {
  if (max_btn.classList.contains("fa-maximize")) {
    max_btn.classList.remove("fa-maximize");
    max_btn.classList.add("fa-minimize");
    card.classList.add("tb-card");
  } else {
    max_btn.classList.remove("fa-minimize");
    card.classList.remove("tb-card");
    max_btn.classList.add("fa-maximize");
  }
});

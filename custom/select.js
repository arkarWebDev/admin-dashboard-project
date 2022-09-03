let mainCategory = ["Mobile Phone", "Tablet", "Computer", "TV", "Other"];
let subCategory = [
  { name: "Samsung", category_id: 0 },
  { name: "Redmi", category_id: 0 },
  { name: "Realme", category_id: 0 },
  { name: "Poco", category_id: 0 },
  { name: "Sony", category_id: 0 },
  { name: "Nothing", category_id: 0 },
  { name: "iPad", category_id: 1 },
  { name: "Samsung", category_id: 1 },
  { name: "Redmi", category_id: 1 },
  { name: "iPlay", category_id: 1 },
  { name: "Hp", category_id: 2 },
  { name: "Dell", category_id: 2 },
  { name: "Asus", category_id: 2 },
  { name: "Acer", category_id: 2 },
  { name: "Panisoic", category_id: 3 },
  { name: "samsung", category_id: 3 },
  { name: "Mi EarPhone", category_id: 4 },
  { name: "Poco Cover", category_id: 4 },
];

mainCategory.map((el, index) => {
  $("#main_select").append(`<option value="${index}">${el}</option>`);
});

subCategory.map((el, index) => {
  $("#sub_select").append(
    `<option value="${index}" data_category="${el.category_id}">${el.name}</option>`
  );
});

$("#main_select").on("change", function () {
  let main_change = $(this).val();
  $("#sub_select option").hide();
  $(`[data_category=${main_change}]`).show();
});

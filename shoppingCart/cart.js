let cart1 = function () {
  let prodList = [
    ["Polo T-Shirt", 20.0],
    ["Reebok Shoe", 24.0],
    ["Park Avenue Shirt", 30.0],
  ];

  let tbody = document.getElementById("tab_body");
  let html = "";
  let sNo = 1;
  let total = 0;

  for (let prod of prodList) {
    html += "<tr>";
    html += "<td></td>";
    html += "<td>";
    sNo++;
  }
};

"use strict";

let serviceText;

$("#services .dropdown-item").click(function () {
  serviceText = $(this).text();
  console.log(serviceText);
  localStorage.setItem("serviceText", serviceText);
});

$("#service-display").text(localStorage.getItem("serviceText"));

let areaText;

$("#areas .dropdown-item").click(function () {
  areaText = $(this).text();
  console.log(areaText);
  localStorage.setItem("areaText", areaText);
});

$("#area-display").text(localStorage.getItem("areaText"));

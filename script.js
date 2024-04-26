"use strict";

// завдання 1

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};

let createNewObjct = function (objct) {
  let updatedPriceData = {};
  for (let key in objct) {
    updatedPriceData[key.toLocaleLowerCase()] = parseFloat(objct[key]).toFixed(2);
  }
  return updatedPriceData;
};
console.log(createNewObjct(priceData));
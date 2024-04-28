"use strict";

// завдання 1

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};

const createNewObject = function (object) {
  let updatedPriceData = {};
  for (let key in object) {
    updatedPriceData[key.toLocaleLowerCase()] = parseFloat(object[key]).toFixed(2);
  }
  return updatedPriceData;
};
console.log(createNewObject(priceData));
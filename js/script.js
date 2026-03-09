"use strict";
let tableTwoFavorFruitList = ["Mango", "Dragonfruit", "Strawberry", "Blueberry"];

const fruitListContent = document.querySelector(".fruitList");
let content = "";

tableTwoFavorFruitList.forEach(fruit => {
    content += `
            <li>${fruit}</li>
    `     
});
fruitListContent.innerHTML += content;
"use strict";

let tbody = document.getElementById("tbody");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const obj = data[i].languages;
      const array = [data[i].languages];
      for (const key in obj) {
        array.push(obj[key]);
      }
      let tableRow = document.createElement("tr");
      tableRow.innerHTML = `<tr>
            <td>${i + 1}</td>
            <td><img src="${data[i].flags.png}"></td>
            <td id='rowName'>${data[i].name.common}</td>
            <td>${data[i].capital}</td>
            <td>${array[2] === 'Uzbek' ? array[2] : array[1]}</td>
            <td>${data[i].population}</td>
            <td>${data[i].region}</td>
        </tr>`;
      tbody.appendChild(tableRow);
    }
    const searchName = document.getElementById("name");
    const rowName = document.querySelectorAll("#rowName");
    rowName.forEach((option) => {
      searchName.addEventListener("input", () => {
        if (option.textContent.toLowerCase().includes(searchName.value.toLowerCase())) {
          option.parentElement.style.display = "";
        } else {
          option.parentElement.style.display = "none";
        }
      });
    });
  });

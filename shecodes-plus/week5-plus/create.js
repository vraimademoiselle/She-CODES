/*let now = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let currentday = days[now.getDay()];

let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let datetime = document.querySelector("#date-time");
datetime.innerHTML = (`${currentday} ${currentHour}:${minutes}`);*/
//chalenge 2

function search(event) {
  event.preventDefault();
  let cityChoice = document.querySelector("#change-city");
  let cityInput = document.querySelector("#city-input");
  cityChoice.innerHTML = cityInput.value;
}

function farenheitchange(event) {
  event.preventDefault();
  let tempfactor = document.querySelector("#temp");
  let newtemp = tempfactor.innerHTML;
  tempfactor.innerHTML = Math.round((newtemp * 9) / 5 + 32);
}
let changetempfarenheit = document.querySelector("farenheittemp");
changetempfarenheit.addEventListener("click", farenheitchange);

function celsuisChange(event) {
  event.preventDefault();
  let tempfactor = document.querySelector("#temp");
  let newtemp = tempfactor.innerHTML;
  tempfactor.innerHTML = Math.round(((temperature - 32) * 5) / 9);
}
let changetempcelsuis = document.querySelector("#celsuistemp");
changetempcelsuis.addEventListener("click", changetempcelsuis);

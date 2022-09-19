function placeText(event) {
  event.preventDefault();
  let placeName = document.querySelector("#place");
  let place = placeName.value;
  if (place.trim() == 0) {
    alert("Please Enter City Name");
  } else {
    displayCity = document.querySelector(".city");
    displayCity.innerHTML = `${place.trim()}`;
  }
}
function Celsius(celinput) {
  let displayTempInCel = document.querySelector(".temperature");
  displayTempInCel.innerHTML = celinput;
}
function convert(celsius) {
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);
  let displayTempInFar = document.querySelector(".temperature");
  displayTempInFar.innerHTML = fahrenheit;
}
let today = new Date();
let day = today.getDay();
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let timeInHours = today.getHours();
let timeInMinutes = today.getMinutes();
//challenge 1
let dayAndTime = document.querySelector("#dayAndTime");
dayAndTime.innerHTML = `${days[day]} ${timeInHours}:${timeInMinutes}`;
//challenge 2
let place = document.querySelector(".btn");
place.addEventListener("click", placeText);
//challenge 3
let celsius = 18;
let celsiusScale = document.querySelector("#celsius");
celsiusScale.addEventListener("click", Celsius(celsius));
let fahrenheitScale = document.querySelector("#fahrenheit");
fahrenheitScale.addEventListener("click", convert(celsius));

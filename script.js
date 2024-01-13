let now = new Date();

function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${day} ${hours}:${minutes},`;

  return currentDate;
}

console.log(formatDate());

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-entry");

  let cityName = document.querySelector("#current-city");
  cityName.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-city-form");
searchForm.addEventListener("submit", searchCity);

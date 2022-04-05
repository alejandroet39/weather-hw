fetch("")
  .then((res) => {
    if (res.ok) {
      console.log("success");
    } else {
      console.log("not successful");
    }
  })
  .then((data) => console.log(data));

function fetchWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=a8aa38cdd3dd713a7207c383fb08def8`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.daily);
    });
}

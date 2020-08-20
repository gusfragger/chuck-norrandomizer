let jokeToShow = document.getElementById("huevo");

document.getElementById("btn").addEventListener("click", function () {
  fetch("http://api.icndb.com/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      jokeToShow.innerHTML = data.value.joke;
    })
    .catch((error) => {
      console.log(error);
    });
});

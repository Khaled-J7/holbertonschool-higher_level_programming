document.addEventListener("DOMContentLoaded", function () {
    const url = "https://swapi-api.hbtn.io/api/films/?format=json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const ul = document.getElementById("list_movies");
        data.results.forEach((film) => {
          const li = document.createElement("li");
          li.innerHTML = film.title;
          ul.appendChild(li);
        });
      });
  });
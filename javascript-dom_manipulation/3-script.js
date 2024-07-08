document.getElementById("toggle_header").addEventListener("click", function () {
    if (document.querySelector("header").className === "green") {
      document.querySelector("header").className = "red";
    } else {
      document.querySelector("header").className = "green";
    }
  });
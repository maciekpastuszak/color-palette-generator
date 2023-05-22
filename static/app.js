const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    getColors();
});

function getColors() {
    const form = document.getElementById("form");
    const loader = document.querySelector(".loader");
  
    loader.style.display = "block"; // Hide the loader by default
  
    const query = form.elements.query.value;
    fetch("/palette", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        query: query
      })
    })
      .then((response) => {
        loader.style.display = "none"; // Show the loader when the request starts
        return response.json();
      })
      .then((data) => {
        const colors = data.colors;
        const container = document.querySelector(".container");
        createColorBoxes(colors, container);
        loader.style.display = "none"; // Hide the loader on successful return
      })
      .catch((error) => {
        console.error("Error:", error);
        loader.style.display = "none"; // Hide the loader on error
      });
  }
  

function createColorBoxes(colors, container){
    container.innerHTML = "";
    for (const color of colors) {
        const div = document.createElement("div");
        div.classList.add("color");
        div.style.backgroundColor = color;
        div.style.width = `calc(100%/ ${colors.length})`

        div.addEventListener("click", function () {
            navigator.clipboard.writeText(color);
        })

        const span = document.createElement("span");
        span.innerText = color;
        div.appendChild(span);
        container.appendChild(div);
    }
}
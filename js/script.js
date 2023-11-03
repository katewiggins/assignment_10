const image = document.querySelector('#dino');

let macronaria = "images/macronaria.jpeg";
let archaeoceratops = "images/archaeoceratops.jpeg";

image.onmouseenter = (e) => {
    e.target.setAttribute('src', macronaria);
};

image.onmouseleave = (e) => {
    e.target.setAttribute('src', archaeoceratops);
};


const toggleButton = document.getElementById("toggle-button");
const imageContainer = document.getElementById("image-container");

toggleButton.addEventListener("click", () => {
    if (imageContainer.style.display === "none") {
        imageContainer.style.display = "block";
    } else {
        imageContainer.style.display = "none";
    }
});
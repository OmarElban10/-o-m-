let currentImage = 0;
let images = document.querySelectorAll(".image-container img");
let messages = document.querySelectorAll(".message");

setInterval(() => {
    images[currentImage].classList.remove("show");
    messages[currentImage].classList.remove("show");

    currentImage = (currentImage + 1) % images.length;

    images[currentImage].classList.add("show");
    messages[currentImage].classList.add("show");
}, 3000);
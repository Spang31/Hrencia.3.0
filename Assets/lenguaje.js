//Menu hamburguesa

document.getElementById("menuBtn").addEventListener("click", () => {
    let menu = document.getElementById("menu");
    let icon = document.getElementById("menuBtn");

    menu.classList.toggle("active");
    icon.classList.toggle("active");
});


//Menu de fotos

const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

document.getElementById("nextBtn").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

document.getElementById("prevBtn").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

/* Auto-slide cada 5 segundos */
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 5000);

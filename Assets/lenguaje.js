document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       MENÚ HAMBURGUESA
    =============================== */

    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
            menuBtn.classList.toggle("active");
        });
    }


    /* ===============================
       CARRUSEL PRINCIPAL (Inicio)
    =============================== */

    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {

        let mainIndex = 0;

        function showSlide(i) {
            slides.forEach(s => s.classList.remove("active"));
            slides[i].classList.add("active");
        }

        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("prevBtn");

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                mainIndex = (mainIndex + 1) % slides.length;
                showSlide(mainIndex);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                mainIndex = (mainIndex - 1 + slides.length) % slides.length;
                showSlide(mainIndex);
            });
        }

        // Auto-slide cada 5 segundos
        setInterval(() => {
            mainIndex = (mainIndex + 1) % slides.length;
            showSlide(mainIndex);
        }, 5000);
    }


    /* ===============================
       SLIDER AUTOMÁTICO CAMISETAS
    =============================== */

    const sliders = document.querySelectorAll(".producto .slider");

    sliders.forEach(slider => {

        const images = slider.querySelectorAll("img");
        let index = 0;

        if (images.length > 1) {

            setInterval(() => {

                images[index].classList.remove("active");

                index = (index + 1) % images.length;

                images[index].classList.add("active");

            }, 5000); // Cambia cada 3 segundos
        }

    });

});

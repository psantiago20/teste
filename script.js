const items = document.querySelectorAll(".menu-item"); /* Seleciona todos os itens do menu */
const panels = document.querySelectorAll(".panel"); /* Seleciona todos os painéis */
const main = document.querySelector("main"); /* Seleciona o elemento main */ /* porque não SectorAll? */
const slides = document.querySelectorAll(".works-panel-sites");
const container = document.querySelector(".works-panel-sites-container");
const indicators = document.querySelector("#works .carousel-indicators");
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

window.addEventListener("load", () => {
    // preloader
    document.querySelector(".img-cheia").style.clipPath = "inset(0 0 0 0)";
    setTimeout(() => {
        document.getElementById("preloader").style.opacity = "0";
        setTimeout(() => document.getElementById("preloader").remove(), 600);
    }, 2000);

    // menu active
    const homeItem = document.querySelector('.menu-item[data-target="home"]');
    homeItem?.classList.add("active");
});


/* ===================== ÍCONES ===================== */
items.forEach((item) => {
    item.addEventListener("click", () => {
        const targetId = item.dataset.target;
        const targetPanel = document.getElementById(targetId);

        if(!targetPanel) return;

        targetPanel.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        items.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
    });
});

if (window.innerWidth <= 768 && slides.length > 1) {
  slides.forEach((_, index) => {
    const btn = document.createElement("button");

    if (index === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
      container.style.transform = `translateX(-${index * 100}%)`;

      document
        .querySelectorAll(".carousel-indicators button")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
    });

    indicators.appendChild(btn);
  });
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede envio real

    status.textContent = "Mensagem enviada com sucesso! (APENAS SIMULAÇÃO)";
    status.style.color = "lightgreen";

    form.reset();
});
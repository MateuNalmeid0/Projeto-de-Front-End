let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Rolar para baixo, esconde a barra
        header.style.top = "-100px"; 
    } else {
        // Rolar para cima, mostra a barra
        header.style.top = "0"; 
    }

    lastScrollTop = scrollTop;
});

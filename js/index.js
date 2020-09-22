//Menu btn... responsive navigation
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav__menu").classList.toggle("show");
});

// ScrollReveal
window.sr = ScrollReveal();

sr.reveal(".nav-main", {
  duration: 2000,
  origin: "bottom",
});

sr.reveal(".menu-btn", {
  duration: 2000,
  origin: "bottom",
});


sr.reveal(".header__img", {
  duration: 2000,
  origin: "left",
  distance: "300px",
});

sr.reveal(".header .content", {
  duration: 2000,
  origin: "top",
  distance: "300px",
});

sr.reveal(".testimonial", {
	duration: 2000,
	origin: "left",
	viewFactor: 0.2
});

sr.reveal(".info-one__img", {
  duration: 2000,
  origin: "left",
	distance: "300px",
	delay: 200
});

sr.reveal(".info-one .content", {
  duration: 2000,
  origin: "top",
	distance: "300px",
	delay: 200
});

sr.reveal(".info-two", { delay: 400 });

sr.reveal(".contact__img", { delay: 1000 });

sr.reveal(".contact .content", { delay: 1000 });

//Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

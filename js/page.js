// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#toTop");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
     toTop.classList.remove("flex");
    toTop.classList.add("hidden");

  }
};

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klick di luar
window.addEventListener("click", function (e) {
if(e.target != hamburger && e.target !=navMenu){
 hamburger.classList.remove("hamburger-active");
  navMenu.classList.add("hidden");
}
})
// dark toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function(){
  if(darkToggle.checked){
    html.classList.add("dark");
    localStorage.theme = "dark";
  }
  else{
    html.classList.remove("dark");
     localStorage.theme = "light";
  }
})

// set posisi toggle sesuai mode saat ini
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
// scroll infinite responsive
function infiniteScrollResponsive() {
  const c = document.getElementById("infinite-scroll");
  const t = document.getElementById("scroll-track");
  if (!c || !t) return;
  if (!t.dataset.original) t.dataset.original = t.innerHTML;
  if (window.innerWidth < 768) { // hanya aktif di mobile
    t.innerHTML = t.dataset.original + t.dataset.original;
    const w = t.scrollWidth / 2;
    c.scrollLeft = w;
    c.onscroll = function () {
      if (c.scrollLeft <= 0) c.scrollLeft = w;
      else if (c.scrollLeft >= t.scrollWidth - c.offsetWidth) c.scrollLeft = w - c.offsetWidth;
    };
  } else {
    t.innerHTML = t.dataset.original;
    c.onscroll = null;
  }
}
document.addEventListener("DOMContentLoaded", infiniteScrollResponsive);
window.addEventListener("resize", infiniteScrollResponsive);

// Back to Top click handler (smooth scroll)
const toTopBtn = document.querySelector('#toTop');
if (toTopBtn) {
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

  


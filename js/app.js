var typed = new Typed(".text", {
  strings: ["Mo'minov Jamshidbek"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const menu = document.querySelector(".container");
const bar = document.querySelector(".menu-bar");
console.log(bar);
function myFunction(x) {
  x.classList.toggle("change");
}

menu.addEventListener("click", () => {
  bar.classList.toggle("hidden");
});

AOS.init({
  duration: 1200,
});

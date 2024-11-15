let btn = document.querySelector("#btn");
console.log(btn);
window.addEventListener("scroll", function () {
  if (this.scrollY >= 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
btn.addEventListener("click", function () {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

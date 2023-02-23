function func() {
  console.log("hello there");
}

let hamBtn = document.getElementById("hamBtn");
let hamMenu = document.getElementById("hamMenu");
let hambtnfirst = document.getElementById("hambtnfirst");
let hambtnsecond = document.getElementById("hambtnsecond");
let hambtnthird = document.getElementById("hambtnthird");

hamBtn.addEventListener("click", () => {
  hamMenu.classList.toggle("hide");
  hamMenu.classList.toggle("modal-bg");
  hambtnfirst.classList.toggle("first-toggle");
  hambtnsecond.classList.toggle("second-toggle");
  hambtnthird.classList.toggle("third-toggle");
});
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("hide");
  hamMenu.classList.toggle("modal-bg");
  hambtnfirst.classList.toggle("first-toggle");
  hambtnsecond.classList.toggle("second-toggle");
  hambtnthird.classList.toggle("third-toggle");
});

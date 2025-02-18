var onionsChanges = document.querySelector(".productOnion");
var jalapenoChanges = document.querySelector(".productJalapeno");
var classicChanges = document.querySelector(".productClassic");

function colorChangeOnion() {
  onionsChanges.classList.toggle("is-active");
}
function colorChangeJalapeno() {
  jalapenoChanges.classList.toggle("is-active");
}
function colorChangeClassic() {
  classicChanges.classList.toggle("is-active");
}

onionsChanges.addEventListener("click", colorChangeOnion);
jalapenoChanges.addEventListener("click", colorChangeJalapeno);
classicChanges.addEventListener("click", colorChangeClassic);

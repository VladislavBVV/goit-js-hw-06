const size = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = "56px";

size.addEventListener("input", font);
function font(event) {
  

  text.style.fontSize = event.currentTarget.value + "px";
};

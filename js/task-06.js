const input = document.querySelector("#validation-input");

input.addEventListener("blur", inp);

function inp(event) {
  if (Number(input.dataset.length) === this.value.length) {
    this.classList.remove("invalid");
    this.classList.add("valid");
    console.log(input);
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
}

// console.log(input);

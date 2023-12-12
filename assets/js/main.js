let string = "";
let buttons = document.querySelectorAll("button");
let input = document.getElementById("results");

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "%") {
      string = (string) / 100;
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "x") {
      string = string.slice(0, string.length - 1);
      input.value = string;
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});

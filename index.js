// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = '#FF69B4';

document.addEventListener("keydown", function (event) {
  console.log(event);
});

//move dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

//move dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
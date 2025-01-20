// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", ""); // Получаем текущую позицию
  const left = parseInt(leftNumbers, 10); // Преобразуем строку в число

  if (left > 0) { // Проверяем, чтобы dodger не вышел за пределы
    dodger.style.left = `${left - 1}px`; // Сдвигаем влево на 1 пиксель
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") { // Если нажата левая стрелка
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", ""); // Получаем текущую позицию
    const left = parseInt(leftNumbers, 10); // Преобразуем строку в число
  
    if (left < 360) { // 400px (ширина поля) - 40px (ширина dodger) = 360px
      dodger.style.left = `${left + 1}px`; // Сдвигаем вправо на 1 пиксель
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { // Если нажата правая стрелка
      moveDodgerRight();
    }
  });
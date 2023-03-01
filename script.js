let drawingCanvas;
let context;
let position_x = 10;
let position_y = 0;

window.onload = function () {
  // Определение контекста рисования
  drawingCanvas = document.getElementById("ship");
  context = drawingCanvas.getContext("2d");
  // Обновляем холст через 0.02 секунды
  setTimeout("drawFrame()", 20);
};

function drawFrame() {
  // Очистить холст
  context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  // Вызываем метод beginPath(), чтобы убедиться, что мы не рисуем часть уже нарисованного содержимого холста
  context.beginPath();
  // Рисуем парус
  context.fillStyle = "#fc0";
  context.moveTo(20, 70);
  context.lineTo(60, 20);
  context.lineTo(60, 70);
  context.fill();
  // Рисуем палубу
  context.beginPath();
  context.fillStyle = "#ccf";
  context.moveTo(0, 70);
  context.lineTo(30, 100);
  context.lineTo(70, 100);
  context.lineTo(100, 70);
  context.fill();
  // Рисуем мачту
  context.beginPath();
  context.fillStyle = "#a60";
  context.fillRect(60, 5, 5, 65);
  // Рисуем флаг
  context.beginPath();
  context.fillStyle = "#e49";
  context.fillRect(40, 5, 20, 10);
  // Пишем название
  context.fillStyle = "#00f";
  context.font = "italic 20px sans-serif";
  context.textBaseline = "top";
  context.fillText("SHIP", 25, 75);

  // Перемещаем кораблик вправо на 1 пиксель (где он будет прорисован в следующем кадре)
  position_x += 1;
  // Рисуем следующий кадр через 20 миллисекунд
  setTimeout("drawFrame()", 20);
}

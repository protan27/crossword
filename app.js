// Простейший кроссворд 5x5
const words = [
  { word: "CAT", row: 0, col: 0, dir: "across" },
  { word: "CAR", row: 0, col: 0, dir: "down" },
];

const grid = document.getElementById("grid");

// создаем сетку
for (let r = 0; r < 5; r++) {
  for (let c = 0; c < 5; c++) {
    const cell = document.createElement("input");
    cell.className = "cell";
    cell.maxLength = 1;
    grid.appendChild(cell);
  }
}
//we can print circle, parabola, chess pattern
function sqr(x) {
  return x * x;
}

function getTileIndex(style, x , y, h, k, r){
  if(style === "chess") {
    return ((x + y) % 2);
  }
  if(style === "circle") {
    return (Math.sqrt(sqr(x - h) + sqr(y - k)) <= r) ? 0 : 1;
  }
  if(style === "parabola") {
    return (sqr(x - h) <= (4 * 1) * (y - k)) ? 1 : 0;
  }

}

function getTile(style, row, col, h, k, r){
  return TILE_PATTERNS[getTileIndex(style, row, col, h, k, r)]
}

const TILE_PATTERNS = ["⬜️", "⬛️", "🟩", "🟫", "🟧"];

function pattern(style,rows, cols, h, k, r) {
  console.clear();
  const lines = [];
  for(let i = 0; i < rows; i++) {
    let line = "";
    for (let j = 0; j < cols; j++) {
      let color = getTile(style, i, j, h, k, r);
      line = line + color;
    }
    lines.push(line);
  }
  return lines.join('\n');
}

function main() {
  const height = 30;
  const width = 30;
  const h = 15;
  const k = 15;
  const r = 13;
  console.log(pattern("parabola",height, width, h, k, r));
}
main();

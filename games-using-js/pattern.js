function sqr(x) {
  return x * x;
}

function getTileIndex(style, x , y, h, k, r){
  if(style === "chess") {
    return (x + y) % 2;  
  }
  if(style === "circle") {
    return (Math.sqrt(sqr(x - h) + sqr(y - k)) === r) ? 0 : 1;
  }
  if(style === "concentric-circle") {
    const d = Math.sqrt(sqr(x - h) + sqr(y - k));
    if(d >= r) {
      return 0;
    }
    if(d < 5) {
      return 1;
    }
    if(d < 10) {
      return 2;
    }

    if(d < 15) {
      return 3;
    }
    if(d < 20) {
      return 4;
    }
    return 1;
  }
  if(style === "parabola") {
    return (sqr(y - h) <= (4 * 1) * (x - k)) ? 1 : 0;
  }

}

function getTile(style, row, col, h, k, r){
  return TILE_PATTERNS[getTileIndex(style, row, col, h, k, r)]
}

function delay(n) {
  for(let i = 0; i < n * 1000000000; i++) { 
  }
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
  return lines;
}

function main() {
  const height = 100;
  const width = 100;
  const h = 50;
  const k = 50;
  const r = 25;
  const drawing = pattern("concentric-circle",height, width, h, k, r);
  for(let i = 0; i < drawing.length; i++) {
    console.log(drawing[i]);
  }
}
main();

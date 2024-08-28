const importprompt = require('prompt-sync');
const prompt = importprompt();

let x;
let y;

while (true){
  x = prompt('X: ');
  y = prompt('Y: ');

  if (x == 0 || y == 0){
    break
  }
  else if (x > 0 && y > 0) {
    console.log('Primeiro quadrante');
  }
  else if (x < 0 && y > 0) {
    console.log('Segundo quadrante');
  }
  else if (x < 0 && y < 0){
    console.log('Terceiro quadrante');
  }
  else if (x > 0 && y < 0) {
    console.log('Quarto quadrante');
  }
}

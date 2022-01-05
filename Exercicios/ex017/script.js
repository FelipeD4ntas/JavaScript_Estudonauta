var numero = document.getElementById('numero');

let saida = document.getElementsByTagName('textarea')[0];
let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', contar);

function contar() {
   saida.innerHTML = `O início vai ser com o número ${numero}`;
}
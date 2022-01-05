let btn = document.getElementsByTagName('button')[0];
let saida = document.createElement('p');
let tabuada = document.createElement('p');
let caixaTabuada = document.querySelector('#tabuada');
let caixaSaida = document.querySelector('#saida');
caixaSaida.appendChild(saida);
caixaTabuada.appendChild(tabuada);
btn.addEventListener('click', calcular);

function calcular() {
    let número = document.querySelector('#numero');

    if (número.value.length == 0) {
        window.alert('[ERRO] Você precisa digitar um número.');
    } else {
        tabuada.innerHTML = ``;
        let n = Number(número.value);
        saida.innerHTML = `Tabuada de ${n}.`
        for (var cont = 1; cont <= 10; cont++) {
            var resultado = n * cont;
            tabuada.innerHTML += `<p>${n} x ${cont} = ${resultado}</p>`
        }
    }
}
let btn_entrada = document.getElementsByTagName('button')[0];
let btn_saida = document.getElementsByTagName('button')[1];
let total = document.querySelector('#total');
let maior = document.querySelector('#maior');
let menor = document.querySelector('#menor');
let n_maior = null;
let n_menor = null;
let numero = null;
let cont = 0;
let colecao_numero = [];

btn_entrada.addEventListener('click', entrada);
btn_saida.addEventListener('click', finalizar);




function entrada() {
    let saida = document.querySelector('#saida');
    numero = Number(document.querySelector('#entrada').value)
    colecao_numero.push(numero);
    saida.innerHTML += `<li>Valor ${numero} cadastrado.</li>`;

    if (cont == 0) {
        n_maior = colecao_numero[cont];
        n_menor = colecao_numero[cont];
    } else if (colecao_numero[cont] > n_maior) {
        n_maior = colecao_numero[cont];
    } else if (colecao_numero[cont] < n_menor) {
        n_menor = colecao_numero[cont];
    }

    cont++
}

function finalizar() {
    total.innerHTML = `Ao todo, temos ${colecao_numero.length} números cadastrados.`;
    maior.innerHTML = `O maior número cadastrado foi ${n_maior}.`;
    menor.innerHTML = `O menor número cadastrado foi ${n_menor}.`;
}
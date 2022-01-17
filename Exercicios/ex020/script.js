let btn_entrada = document.getElementsByTagName('button')[0];
let btn_saida = document.getElementsByTagName('button')[1];
let total = document.querySelector('#total');
let maior = document.querySelector('#maior');
let menor = document.querySelector('#menor');
let soma = document.querySelector('#soma');
let media = document.querySelector('#media');
let n_maior = null;
let n_menor = null;
let numero = null;
let cont = 0;
let soma_total = 0;
let media_total = null;
let colecao_numero = [];

btn_entrada.addEventListener('click', entrada);
btn_saida.addEventListener('click', finalizar);




function entrada() {
    let saida = document.querySelector('#saida');
    numero = Number(document.querySelector('#entrada').value);
    soma_total += numero;
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
    media_total = soma_total / colecao_numero.length;
    cont++
}

function finalizar() {
    total.innerHTML = `Ao todo, temos ${colecao_numero.length} números cadastrados.`;
    maior.innerHTML = `O maior número cadastrado foi ${n_maior}.`;
    menor.innerHTML = `O menor número cadastrado foi ${n_menor}.`;
    soma.innerHTML = `Somando todos os valores, temos ${soma_total}.`;
    media.innerHTML = `A média dos valores cadastrados é ${media_total.toFixed(2)}.`
}
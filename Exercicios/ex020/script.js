let btn_entrada = document.getElementsByTagName('button')[0];
let btn_saida = document.getElementsByTagName('button')[1];
let resultado = document.querySelector('#resultado');
let maior = null;
let menor = null;
let media = null;
let cont = 0;
let soma = 0;
let colecao_numero = [];

btn_entrada.addEventListener('click', entrada);
btn_saida.addEventListener('click', finalizar);

function encontrado(colecao, numero_teste) {
    let encontrado = false;
    for(const pos in colecao) {
        if (numero_teste == colecao[pos]) {
            encontrado = true
            return encontrado
        }
    }
}

function entrada() {
    let numero_txt = document.querySelector('#entrada');
    if (numero_txt.value.length == 0 || numero_txt.value > 100 || numero_txt.value <= 0 || encontrado(colecao_numero, numero_txt.value) == true) {
        alert(`Valor inválido ou já se encontra na lista.`)
    } else {
        let numero = Number(numero_txt.value);
        let saida = document.querySelector('#saida');
        soma += numero;
        colecao_numero.push(numero);
        saida.innerHTML += `<li>Valor ${numero} cadastrado.</li>`;
        resultado.innerHTML = '';

        if (cont == 0) {
            maior = colecao_numero[cont];
            menor = colecao_numero[cont];
        } else if (colecao_numero[cont] > maior) {
            maior = colecao_numero[cont];
        } else if (colecao_numero[cont] < menor) {
            menor = colecao_numero[cont];
        }

        media = soma / colecao_numero.length;
        cont++
    }
    numero_txt.value = '';
    numero_txt.focus();
}

function finalizar() {
    if (colecao_numero.length == 0) {
        alert(`Adicionae valores antes de finalizar.`)
    } else {
        resultado.innerHTML = '';
        resultado.innerHTML += `<p class="resultados">Ao todo, temos ${colecao_numero.length} números cadastrados.</p>`;
        resultado.innerHTML += `<p class="resultados">O maior número cadastrado foi ${maior}.`;
        resultado.innerHTML += `<p class="resultados">O menor número cadastrado foi ${menor}.</p>`;
        resultado.innerHTML += `<p class="resultados">Somando todos os valores, temos ${soma}.</p>`;
        resultado.innerHTML += `<p class="resultados">A média dos valores cadastrados é ${media.toFixed(2)}.</p>`
    }
    }
    
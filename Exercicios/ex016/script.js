let btn = document.getElementsByTagName('button')[0];
let saida = document.querySelector('#saida');

btn.addEventListener('click', contar);

function contar() {
    let inicio = document.querySelector('#inicio');
    let fim = document.querySelector('#fim');
    let passo = document.querySelector('#passo');
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Está faltando informações!');
    } else {
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        saida.innerHTML = `<p><strong>Contando...</strong></p>`
        if (p == 0) {
            window.alert('[ERRO] Não é possível pular de 0 em 0 na contagem...\nSendo assim.\nA contagem vai começar, considerando o passo de 1 em 1...');
            p = 1;
        }
        if (i < f) {
            //Contagem crescente
            while (i <= f) {
                saida.innerHTML += `${i} &#x1F449`;
                i += p;
            }
        } else if (i > f) {
            //Contagem regressiva
            while (i >= f) {
                saida.innerHTML += `${i} &#x1F449`;
                i -= p;
            }
        }
        saida.innerHTML += `&#x1F3C1;`;
    }
}
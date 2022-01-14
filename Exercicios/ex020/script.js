let btn_entrada = document.getElementsByTagName('button')[0];
let btn_saida = document.getElementsByTagName('button')[1];
let cont = null;
let box_resultado = document.querySelector('#resultado');
let resultado = document.createElement('p');
resultado.setAttribute('class', 'resultados');
box_resultado.appendChild(resultado);
btn_entrada.addEventListener('click', entrada);


function entrada() {
    cont +=  1; 
    let numero = Number(document.querySelector('#entrada').value)
    let colecao = [
        numero,
    ]
    let box_saida = document.querySelector('#saida');
    let saida = document.createElement('li');
    btn_saida.addEventListener('click', finalizar)
    box_saida.appendChild(saida);


    saida.innerHTML = `Valor ${numero} cadastrado.`;

    function finalizar() {
    resultado.innerHTML = `Ao todo, temos ${cont} números cadastrados.`;
}
}


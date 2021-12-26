function verificado() {
    var ano = new Date();
    var ano_atual = ano.getFullYear();
    var nascimento = document.getElementById('user_nasc');
    var msg = document.getElementById('msg');

    if (nascimento.value.length == 0 || nascimento.value > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var idade = ano_atual - Number(nascimento.value);
        var sex = document.getElementsByName('sexo');
        var img = document.createElement('img');
        img.setAttribute('id', 'imagem');
        var gênero = null;
        if (sex[0].checked) {
            gênero = 'Homem';
            document.body.style.background = 'rgb(134, 134, 212)';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-m.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-m.jpg');
            } else {
                img.setAttribute('src', 'imagens/velho-m.jpg');
            }
        } else if (sex[1].checked) {
            gênero = 'Mulher';
            document.body.style.background = 'rgb(244, 174, 172)';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-f.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-f.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-f.jpg');
            } else {
                img.setAttribute('src', 'imagens/velha-f.jpg');
            }
        }
        msg.innerHTML = `Detectamos ${gênero} com ${idade} anos`;
        msg.appendChild(img);
    }
}
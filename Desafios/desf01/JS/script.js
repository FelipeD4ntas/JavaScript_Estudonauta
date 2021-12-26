
function carregar() {
    var msg = document.getElementById('horario');
    var img = document.getElementById('imagem');
    var horas = new Date();
    var minutos = new Date();
    var hora_atual = horas.getHours();
    var min_atual = minutos.getMinutes();
    msg.innerHTML = `<strong>Agora são ${hora_atual} horas e ${min_atual} minutos.</strong>`;
    if (hora_atual <= 12) {
        document.body.style.background = '#5594BF';
        img.src = 'imagens/manha.jpg';
    } else if (hora_atual <= 18) {
        document.body.style.background = '#618488';
        img.src = 'imagens/tarde.jpg';
    } else {
        document.body.style.background = '#011025';
        img.src = 'imagens/noite.jpg';
    }
    
}

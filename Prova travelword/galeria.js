
  function abririmagem(imagem) {
    const imagemAmpliada = document.getElementById('imagem-ampliada');
    const sobreposicao = document.getElementById('sobreposicao');
    const fecharBotao = document.getElementById('fecharimagem');

    imagemAmpliada.src = imagem;
    sobreposicao.style.display = 'flex';
    fecharBotao.style.display = 'block';
}

function fecharimagem() {
    const sobreposicao = document.getElementById('sobreposicao');
    const fecharBotao = document.getElementById('fecharimagem');

    sobreposicao.style.display = 'none';
    fecharBotao.style.display = 'none';
}
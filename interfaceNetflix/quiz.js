var botoes = document.querySelector('.botao')
function verificar(respostaCorreta)
{
     var resultado = document.querySelector('p');

    if(respostaCorreta)
    {
        resultado.innerHTML     = 'Voce acertou'
    } else {
        botao.style.color = 'red'
    }

}




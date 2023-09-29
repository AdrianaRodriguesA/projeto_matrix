'use strict';

// botão claro e escuro
const interruptor = document.querySelector('.btn');

interruptor.addEventListener('click', function() {
    document.body.classList.toggle('tema-claro');
    document.body.classList.toggle('tema-escuro');

    const className = document.body.className;
    if(className == "tema-claro") {
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro";
    }
    
    console.log('current class name: ' + className);
});
// botão enviar mensagem
function botao(obj)
{
    obj.style.backgroundColor = "var(--btnHover)";
    obj.style.color = "var(--btnFontColor)";
}
function botao2(obj)
{
    obj.style.backgroundColor = "var(--btnBg)";
    obj.style.color = "var(--btnFontColor)";
}
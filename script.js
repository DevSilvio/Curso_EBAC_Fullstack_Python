document.getElementById('formulario').addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);
    const message = document.getElementById('message');

    if (campoB > campoA){
        message.textContent = "formulário valido B é maior que A";
        message.style.display = "block"
    }else if (campoA > campoB){
        message.textContent = "formulário invalido A é maior que B"
        message.style.color = "red"
        message.style.display = "block"
    } else {
        message.textContent = "campo A e campo B são: iguais"
        message.style.display = "block"
    }
})
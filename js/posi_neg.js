document.addEventListener('DOMContentLoaded', function(){
    const numero = document.getElementById('numero')
    const resposta = document.getElementById('resposta')

    document.getElementById('verificar').addEventListener('click', function() {
        if (numero.value > 0) {

            resposta.textContent = 'O número é positivo';
            
        } 
        else if (numero.value < 0) {

            resposta.textContent = 'O número é negativo';

        } 
        else {
            
            resposta.textContent = 'O número é zero';
        }
    })
});
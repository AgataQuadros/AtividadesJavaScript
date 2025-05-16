document.addEventListener('DOMContentLoaded', function(){
    const palpite = document.getElementById('numero');
    const resposta = document.getElementById('resposta');

    let numeroSorteado = Math.floor(Math.random() * 10) + 1;

    document.getElementById('enviar').addEventListener('click', function(){
        if (palpite.value === numeroSorteado) {
            resposta.textContent = `Você acertou! o número era ${numeroSorteado}!`;
            numeroSorteado = Math.floor(Math.random() * 10) + 1;
        }
        
        else if (palpite.value < numeroSorteado) {
            resposta.textContent = `O número é maior que ${palpite.value}...`;
        } 

        else if (palpite.value > numeroSorteado) {
            resposta.textContent = `O número é menor que ${palpite.value}...`;
        } 
    });
});
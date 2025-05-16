document.addEventListener('DOMContentLoaded', function(){
    const entrada = document.getElementById('entrada');
    const resposta = document.getElementById('resposta');

    document.getElementById('verificar').addEventListener('click', function(){
         if (parseFloat(entrada.value) == entrada.value) {
            resposta.textContent = `"${entrada.value}" é um número!`;
        }
        else if ((entrada.value === "true") || (entrada.value === "false")) {
            resposta.textContent = `"${entrada.value}" é um booleano!`;
        } 
        else {
            resposta.textContent = `"${entrada.value}" é uma string!`;
        } 
    });
});
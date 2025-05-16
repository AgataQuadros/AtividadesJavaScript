document.addEventListener('DOMContentLoaded', function(){
    const palavra = document.getElementById('palavra');
    const resposta = document.getElementById('resposta');

    document.getElementById('verificar').addEventListener('click', function(){
        let minuscula = palavra.value.toLowerCase();
        let invertida = minuscula.split('').reverse().join('');

        if (minuscula === invertida) {
            resposta.textContent = `${minuscula} é um palíndromo! :D`;
        } else {
            resposta.textContent = `${minuscula} não é um palíndromo :(`;
        }
    })
});
document.addEventListener('DOMContentLoaded', function(){
    const contador = document.getElementById('contador');

    document.getElementById('iniciar').addEventListener('click', function(){
        let tempo = 10;

        const intervalo = setInterval(() => {
        contador.textContent = tempo;
        tempo--;

        if (tempo < 0) {
            clearInterval(intervalo);
            contador.textContent = "Acabou! >W<";
        }
        }, 1000);

    });
});
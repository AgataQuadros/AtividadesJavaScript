document.addEventListener('DOMContentLoaded', function() {
    const senha = document.getElementById('senha');
    const resposta = document.getElementById('resposta');

    document.getElementById('validar').addEventListener('click', function() {
        const valor = senha.value;

        if (valor.length < 8) {
            resposta.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        }
        else if (!/[a-z]/.test(valor)) {
            resposta.textContent = 'Inclua pelo menos uma letra minúscula.';
        }
        else if (!/[A-Z]/.test(valor)) {
            resposta.textContent = 'Inclua pelo menos uma letra maiúscula.';
        }
        else if (!/[0-9]/.test(valor)) {
            resposta.textContent = 'Inclua pelo menos um número.';
        }
        else if (/[!@#$%^&*(),.?":{}|<>]/.test(valor)) {
            resposta.textContent = 'Esta senha é invalida. Não pode ter caracteres especiais';
        }
        else {
            resposta.textContent = 'Esta senha é forte.';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tarefa = document.getElementById('addTarefa');
    const lista = document.getElementById('tarefas');

    document.getElementById('btnAdd').addEventListener('click', function () {
        const texto = tarefa.value.trim();
        if (texto !== "") {

            // Cria um novo elemento <li> e define seu conteúdo
            const li = document.createElement("li");
            li.textContent = texto;

            // Adiciona o <li> à lista
            lista.appendChild(li);

            // Limpa o campo de entrada
            input.value = "";

        } else {
            // Se o campo estiver vazio, exibe um alerta ao usuário
            alert("Digite algo antes de adicionar.");
        }


    });
});
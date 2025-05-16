document.addEventListener('DOMContentLoaded', function(){
    const caracteres = document.getElementById('caracteres')

    document.getElementById('entrada').addEventListener('input', function(){
        
        let qtdCaracteres = document.getElementById('entrada').value.length;
        caracteres.textContent = `${qtdCaracteres} caracteres digitados`;
    })
});
function recarregarPagina() {
    // Tempo em milissegundos (por exemplo, 5 segundos)
    let tempoRecarregamento = 5000;
    setTimeout(function() {
        location.reload();
    }, tempoRecarregamento);

    // Verifica se o contador já existe no localStorage
    if (localStorage.getItem('contador')) {
        // Se existe, converte para número
        var contador = parseInt(localStorage.getItem('contador'));
    } else {
        // Se não existir, iniciar o contador em 0
        var contador = 0;
    }

    // Incrementa o contador 
    contador++;

    // Atualiza o contador no LocalStorage
    localStorage.setItem('contador', contador);

    // Mostra o valor do contador no console
    console.log(`${contador} vezes recarregada.`);
    document.getElementById('contador').innerHTML = contador;
}
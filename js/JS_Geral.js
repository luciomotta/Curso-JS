// Tempo em melissegundos (por exemplo, 5 segundos)
let tempoRecarregamento = 5000;
setTimeout(function() {
    location.reload();
}, tempoRecarregamento);

//Veriica se o Contador ja existe no localStorage
if(localStorage.getItem('contador')){
    //Se existe, converte para numeo
    var contador = parseInt(localStorage.getItem(`contador`))

} else {
    //se não existir, iniciar o contador 0
    var contador = 0;
}

//incrementar o contador 
contador++;

//atualizar o contador no LocalStorage
localStorage.setItem('contador', contador)

//Mostrar o valor do contador na página

const texto_C = document.getElementById('texto_C')

//Criar elemtnto para apreesentar contador
//texto_C.textContent = '<br><br>esta pagina foi recarregada <b>' + contador+'</b> vezes.';
console.log(contador+' Foi Recarregado..')
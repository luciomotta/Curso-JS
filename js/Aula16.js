/* 
tTimeout(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, milliseconds)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.
*/

/*
O setTimeOut sera exutado quando passar o tempo determinado. 
*/
function ativarContagem(){
    document.getElementById('tempo').innerHTML = 'Começou a contar !';

    //Ativa a função somente 1x quando o tempo pass
    tempo = setTimeout(function(){
        document.getElementById('tempo').innerHTML = 'executou o setTimeout';
        document.body.style.backgroundColor = 'green';
        clearInterval(tempo_contador);
        voltarContagem();
    },5000);

    tempo_contador = setInterval(function (){
        var cronometro = document.getElementById('tempo1');
        var soma = parseInt(cronometro.innerHTML) + 1;
        valorAtual = document.getElementById('tempo1').innerHTML = soma;

    }, 1000);
};



function pararContagem(){
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = 'Parou a contagem';
    clearInterval(tempo_contador);
    document.body.style.backgroundColor = 'red';
};

function voltarContagem(){
    tempo_contador = setInterval(function (){
        var cronometro = document.getElementById('tempo1');
        var soma = parseInt(cronometro.innerHTML) -1;  

        if (soma === 0) {
            document.getElementById('tempo').innerHTML = 'tempo esgotado!';
            pararContagem();
        }
        valorAtual = document.getElementById('tempo1').innerHTML = soma;  
        } , 1000);
};
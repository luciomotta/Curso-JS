/*If e else */

var interruptor = "off";


//1º maneira de CONDIÇÃO

/*if(interruptor == "on") {
    alert ('A lampada está ligada')
} else{
    alert('A lampada está desligada')
}
*/
//Fuction Interruptor
let nome = document.getElementById("nome").value.trim();

document.addEventListener("keyup", function (event){
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("btn").click();
    }
});

// Função para verificar se o campo está vazio
function verificarCampoVazio() {
    var campo = document.getElementById("nome");
    var checkbox = document.getElementById('toggleSwitch');

    if (campo.value === "" || campo.value === null || campo.value === undefined) {
        console.log("Campo vazio");
        checkbox.checked = false;
    } else {
         // Marca o checkbox se o campo não estiver vazio
    }
    toggleLamp(); // Atualiza o estado da lâmpada com base no estado do checkbox
}

// Adiciona um ouvinte de eventos ao campo de entrada para verificar se está vazio durante a digitação
document.getElementById("nome").addEventListener("input", verificarCampoVazio);

// Chama a função verificarCampoVazio quando a página é carregada para verificar o estado inicial do campo
document.addEventListener("DOMContentLoaded", verificarCampoVazio);

function toggleLamp() {
    var img = document.getElementById('lampimg');
    var checkbox = document.getElementById('toggleSwitch');

    if (checkbox.checked) {
        // Se o checkbox estiver marcado (ligado), mostra a imagem de lâmpada ligada
        img.src = 'src/img/LuzLigada.png';
    } else {
        // Se o checkbox não estiver marcado (desligado), mostra a imagem de lâmpada desligada
        img.src = 'src/img/LuzDesligada.png';
    }
}


function Verificar() {
    let nome = document.getElementById("nome").value.trim();

    if (nome === "" || nome===null){
        let p = document.getElementById("test");
        p.innerHTML = "O campo não pode estár vazio";
        p.style.color = "red";
    }else {
        let p = document.getElementById("test");
        p.innerHTML = "Tudo certo Parábens"
        p.style.color = "green"
        var img = document.getElementById('lampimg');
        img.src = 'src/img/LuzLigada.png';
        var checkbox = document.getElementById('toggleSwitch');
        checkbox.style.display=''
    }
}



// obter a data atual
var agora = new Date();

//Obter horas, minutos e segundos
var horas = agora.getHours();
var Minutos = agora.getMinutes();
var segundos = agora.getSeconds();

//Formatando Para exibir sempre com dois dígitos (por exemplos, 09 ao invés de 9)
if (horas < 10) {
    horas = '0' + horas;
}
if (Minutos < 10) {
    Minutos = '0' + Minutos;
}
if (segundos < 10) {
    segundos = '0' + segundos;
}

//Criando uma STRING no formato desejado (hh:mm:ss)
var HoraFormatada = horas +':'+ Minutos +':'+segundos;


//criando um elemento de paragrafo <p> para inserir no HTML
var date_comp = document.createElement('p');

//Definir o conteúdo do parágrafo com quebra de linha e cor azul
date_comp.textContent = 'DATE(), pega TD sem sem formatação:\n';
date_comp.textContent += agora;
date_comp.style.color = 'Blue'
// Obtendo o elemento com id 'Hora_compl' e adicionando o parágrafo criado
document.getElementById('Hora_compl').appendChild(date_comp);


document.getElementById('hora_FORMT').innerHTML  = 'Hora formatada com uma condicional (getHours....): '+HoraFormatada;




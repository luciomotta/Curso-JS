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




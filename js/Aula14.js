/* Switch 
É usado para realizar diferentes ações com base em diferentes 
condições no mesmo bloco de verificação. Caso a condição não 
seja compatível não será executada e o valor padrão será 
acionado. */

function verificaCor() {
    let cor = document.getElementById('cor').value.toLowerCase(); // Converte para minúsculas para evitar problemas de case sensitive

    switch (cor) {
        case 'azul':
            document.body.style.background = "blue";
            console.log('Fundo Azul');
            break;
        case 'preto':
            // Seleciona todas as tags <div> no documento
            var divs = document.querySelectorAll('div');

            // Itera sobre todas as divs e muda a cor do texto para preto
            divs.forEach(function(div) {
                div.style.background = "black";
            });
            console.log('DIV em preto');
            break;
        case 'amarelo': // Caso queira reconhecer tanto 'amarelo' como 'Amarelo', ajuste a condição antes do switch
            // Supondo que você queira mudar a cor do texto de todos os elementos h1
            let titulos = document.getElementsByTagName('h1');
            for (let i = 0; i < titulos.length; i++) {
                titulos[i].style.color = "yellow";
            }
            console.log('Títulos em Amarelo');
            break;
        default: //Se não houver o 'default' ele ira continuar rodando o
            document.getElementById('teste').innerHTML = "Somente as cores azul, preto ou amarelo";
            let input =document.getElementById('cor').value = ""
            document.getElementById('cor').value = "Esta cor não e valida ' " + cor + "'";
    }
}

function DiaSemana() {

    var dia = new Date().getDay();
    console.log(dia);
    switch (dia) {
        case 1:
            document.write('<br> Hoje e Segunda-Feira')
            break;
        case 2:
            document.write('Hoje e Segunda-Feira')

            document.write('<br><br> Hoje é Terça-Feira ');
            break;
        case 3:
            document.write('Hoje e Quarta-Feira')
            break;
        case 4:
            document.write('Hoje e Quinta-Feira')
            break;
        case 5:
            document.write('Hoje e Sexta-Feira')
            break;
        case 6:
            document.write('Hoje e Sabado')
            break;
        case 7:
            document.write('Hoje e Domingo')
            break;
        default:
            console.log('Erro p\ identificar os dias da semana')
    }
}
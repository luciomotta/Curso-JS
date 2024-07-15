/* Manipular Data com JS*/

function addHTML(html){
    //encontrar section pelo ID
    document.getElementById('output').innerHTML += html;
    //Criar um NV elemento <p>
    let paragrafo = document.createElement('p');
    //Definir o texto no paragrafo
    paragrafo.textContent = texto;
    //Adicionar o paragrafo na section
    document.getElementById('output').appendChild(paragrafo);
}

//Comando base para pegar a DATA ===> saida: Mon Jul 15 2024 09:28:49 GMT-0300 (Horário Padrão de Brasília)
let data  = new Date();
console.log('Pegando data completa: '+data);
addHTML('<br></br>'+'Pegando data completa: '+data+'<br></br> Abara o console p/ mais saídas...');


//pegando o ANO atual c\ 4 digitos
let ano = data.getFullYear();
console.log(ano);


//Pegar o MÊS atual - de 0 até 11 sendo 0 Janeiro e 11 Dezembro
let mes = data.getMonth();
console.log('pegando o mes da Data: '+mes);


const mesesDoAno = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
console.log('Mês atual:(Usando array MESES... ) '+ mesesDoAno[data.getMonth()]);

//Pegar dia do Mês - 1 ATÉ 31
let dia = data.getDate();
console.log('Dia do mes:'+dia);

//pegar o dia da Semanada vai pegar os dias - 0 ATÉ 6 (domingo até sabado)
let diaSemana = data.getDay();
console.log('Dia da semana: '+diaSemana);

const diasDaSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
console.log('Dia da semana (Usando array Dias...) '+diasDaSemana[data.getDay()]);

//Pegar a Hora de - 0 ATÉ 23
let hora = data.getHours(); 
console.log('Hora atual: '+hora);

//pegar os minutos de 0 ATÉ 59
let minutos = data.getMinutes(); 
console.log('Hora atual + [M]: '+hora+':'+minutos);

//pegar os segundos de 0 ATÉ 59
let segundos = data.getSeconds(); 
console.log('segundos: '+segundos);


//pegar os milisegundos de 0 ATÉ 999
let milisegundos = data.getMilliseconds(); 
console.log('milisegundos: '+milisegundos);

//Pegar a data no padrão BRASILEIRO = DIA/ MES / ANO
let dataBR = data.toLocaleString('pt-BR'); // pegar uma parte: ('pt-BR', { dateStyle: 'short' } ou {timeStyle: 'short'});
console.log('Data no padrão BR: '+dataBR);


//Pegar os valores Separademente 

d = new Date();
diaMes = d.getDate();
mes = d.getMonth()+1;
ano = d.getFullYear();

function addZero(x) {return x < 10 ? '0'+x : '' + x; };

let dataPadraoBR = addZero(diaMes)+'/'+addZero(mes)+'/'+ano;
console.log('Data no padrão BR: '+dataPadraoBR);

//Comparar datas < ou >. EX: VENCIMENTO DE BOLETO...
var hoje = new Date();
var Vencimento = new Date(2024, 6, 15);

if ( hoje > Vencimento){
    console.log('Boleto Vencido');
}else{
    console.log('Boleto em dia');
}
//Diferença de duas datas em dias
let  dataInicial = new Date();
let dataFinal = new Date(2024, 11, 31);

//iRA FAZER A DIFERENÇA EM MILISEGUNDOS
var diferebcaTempo = dataFinal.getTime() - dataInicial.getTime();   


//CONVERTER PARA DIAS 
var diferebcaTempo = Math.ceil(diferebcaTempo / (24*60*60*1000));

console.log('Diferença de dias: '+diferebcaTempo+' Para o final do ano de 2024');
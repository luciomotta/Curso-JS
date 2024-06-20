// TIPOS DE SAIDAS EM js---------------------------------------------------------------------------------------
document.getElementById("texto01").innerHTML="Meu 1º texto <b>JS</b>"; //Incorporando texto pelo JS, saida inner..
document.write('<u>escrevendo com document write ---> 5+5= </u>', 5+5); //escrevendo dentro do JS

console.log("Escrevendo com o ConsoleLog:")  // escrevendo o consoleLog

// Declarações no JS--------------------------------------------------------------------------------------
//Conceitos de Váriaveis ----------------------------------------------------------------------------
/*
-> var      (Ele pode reatribuir valores DPS)
-> const    (Falor constante, não muda)
-> let      (Ela não pode ser redeclarada)
 */ 
let a,b,c; //declarada as Váriaveis indefinidas!!!

//Atribuindo valores
a=5;    b=5;    c=7; d = a + 5 * c;
var Pessoa = "Lúcio", pessoa = "Flávio";
var NomeCompleto = Pessoa + pessoa; //neste caso os nomes estão junto s\ espaço

console.log(d,' ou d'); 
document.write('<br> <br>', Pessoa +" "+ pessoa ,d); //JS e case Sensitive !!! C\ espaço...


let x = 10; //aqui é 10
{
    let x =2; // dentro do escopo ele e 2;
    document.write("<br>Varaivel x no escopo:",x);
}

    document.write('<br> Fora do escopo', x);

/*Operadores -----------------------------------------------------
São os sinals que usamos: + - * / = ++ -- += -= && || etc...
São separados en 6 categorias":
1) Operadores Aritméticos (matemáticos) 
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operador Condicional (Ternário)
6) Operadores Logicos
*/
var valor1, valor2, total;
valor1 = 3; valor2 = 10; // atribuindo valor a var
total = ++valor1+valor2; // o valor1 recebei um INCREMENTO ficando 4
valor1 += valor2; // ela ficara 14
document.write('valor de valor1:', valor1);

comp = (valor1 == valor2); //Comparação
//  alert(comp) // return FALSE

valor1 = 8; valor2="8";
comp1 = (valor1==valor2); //TRUE, viu que os valores são igual
camp2 = (valor1 === valor2); //FALSE comparando valores e o Tipo

var idade=18, eleitor;
eleitor = (idade<18) ? " Não, Eleitor" : " Sim, eleitor";
document.write('<br> a resposta, eleitor é:' + eleitor + ' A idade dele é: ' + idade);

resultado = (idade > 60 && idade < 70); // maior que 60 e menor que 70
resultado01 = (idade === 60 || idade=== 72); //idade igual a 60 ou 72

//Comentários em JS----------------------------------------------------------------------------------------------------
/*
Comentar em multiplas linhas
*/
//function---------------------------------------------------------------------------------------------
function minhafuncao(){
    document.write(5+5);
    document.write(5+5);
    document.write(5+5);
    document.write(5+5);
}
function soma(valor, valor2){
    return valor + valor2;
};

var totaal = soma(138,-38);
document.write('<br> <br>'+totaal);
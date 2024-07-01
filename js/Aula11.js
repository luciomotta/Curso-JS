/* ARRAYS Os arrays JavaScript são usados para armazenar vários valores 
em uma única variável. Diferente dos objetos, que funcionam com 
propriedades ou "nomes" que você dá para os itens dentro dele, os arrays 
não possuem propriedades. O item dentro dele é encontrado pela posição.
Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz". 

A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.
*/

var item1 = "arroz";
var item2 = "faijão";
var item3 = "Macarrão";
var item4 = "leite";

                //0        //1      //2         //3 
const lista = ["arroz", "feijão", "Macarrão", "leite"];
console.log(lista[0]);

// Comecei com ele faziu e depois atribuiu os valores!!
const Mercado = []
Mercado[0] = "BigBox";
Mercado[1] = "DiaDia";
Mercado[2] = "Carrefoul";
Mercado[3] = "Tatico";

console.log(Mercado);


/*----------Métodos Para Arrays (Matrizes)------------------*/
document.getElementById('test').innerHTML = Mercado.join(" - ");

Mercado.pop(); //Remove o Ultimo Item da LISTA
Mercado.push('Qualquer'); //ADD iTem´s a LISTA
Mercado.shift();   //Remove o 1º item da LISTA

document.getElementById('write').innerHTML = Mercado.join(" - ");
document.getElementById('write').textContent = 'Usando Metodos: POP() / PUSH() / shift()';
/////////////////////////////////////////////////////////////////////////////////////////////////
lista.unshift('Hot-dog');  //inserindo ao 1º da lista 

console.log('Imprimindo o 2º ARRAY:  ' +  lista);
console.log(lista);
document.getElementById('write02').textContent = '-Usando o UNSHIFT p/ add um item ao indice[0]:'+lista+' ';

// O método splice em JavaScript é usado para modificar o conteúdo de um array, adicionando novos elementos
// e/ou removendo elementos existentes. Ele recebe três argumentos:
// 1. O índice onde as modificações devem começar.
// 2. O número de elementos a serem removidos (0 se nenhum for removido).
// 3. Os novos elementos a serem adicionados a partir do índice especificado.
// Neste exemplo específico, lista.splice(1, 0, "Item ADD 1", "item ADD 2") adiciona os elementos
// "Item ADD 1" e "item ADD 2" na posição 1 do array 'lista', sem remover nenhum elemento existente.

lista.splice(1,0, "Item ADD 1", "item ADD 2")
document.getElementById('write02').textContent = '-Utilizando o método splice para adicionar os itens "Item ADD 1" e "item ADD 2" no índice 1 da lista.: '+lista+' ';

const superlista = lista.concat(Mercado); //fUSÃO DE mATRIZES USANDO O conccat
document.getElementById('write03').textContent = '-Fusão DE mATRIZES USANDO O conccat: [const superlista = lista.concat(Mercado);]     '+superlista+' ';

const Fatiador = superlista.slice(7, 10);// está função ira fatia o ARRAY
document.getElementById('write04').textContent = '-Fatiando Matriz usando *SLICE(7,9)*:  '+Fatiador+' ';
Fatiador.sort();
console.log('Usando o SORT p\ deixar o Array em ordem Alfabetica: '+Fatiador + '   Poderia usar o REVERS p\ deixar decescente');
 
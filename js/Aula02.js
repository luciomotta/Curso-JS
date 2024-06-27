//Conceitos de OBJETOS (Variaveis com muitos valores dentros)

/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = (marca: "ford", modelo:"ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocadas dentro de uma propriedade.
*/



let carro = {marca: "ford", modelo:"KA", Ano:2015, placa:"ABC-1234", completo: function(){ console.log("O nome e modelo deste Carro e: "+ this.marca + " "+ this.modelo)} };

const carro01 = {marca: "ford",
                 modelo:"fusion", 
                 Ano:2024, 
                 placa:"ABC-1468", 
                 buzina: function(){alert(`BIiiiiiiiiiiiiiii`)}
                }; // Valor constante do Objeto

console.log(carro);
console.log(carro01.buzina);
carro.completo();

//Aula10
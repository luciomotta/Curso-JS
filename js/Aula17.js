/** CLASSES EM JAVASCRIPT
Em 2015 foi introduzido no JavaScript as Classes. As classes são um conceito 
antigo em programação e várias linguagens utilizam elas. Mas no Javascript isso é 
relativamente novo, por isso mesmo programadores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos. 
Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os 
objetos, as Classes no Javascript usam um método chamado constructor() para 
fabricar os objetos.
*/

class Carro{
    //construtor(Materia prima= PARAMETRO){propriedades}
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    //Metodos
    BUZINA(){
        return this.modelo + " buzinou: " +"BIBIIIIIIIIIIII";
    }
}



const Range = new Carro("Range Rover", "Velar", '2021');
console.log(Range);

const Gol = new Carro("Volkswagen", "Gol", '2020');
console.log(Gol.marca + " " + Gol.ano+" "+Gol.BUZINA());

const clasic = new Carro("Chevrolet", "Classic", '2015');

//mudar o valor de uma propriedade do objeto
Gol.ano = 2024;
console.log("Alterando valor da propriedade ano: "+ Gol.ano );

//Adicionar propriedade ao objeto
Gol.cor = "Preto";
console.log("Adicionando propriedade cor: "+ Gol.cor );

//Removendo propriedade do objeto
delete Gol.cor;
console.log("Removendo propriedade cor: "+ Gol.cor );


var data_user = new Date().getFullYear();
for (let i=data_user; i >= 1990 ; i--){
    document.getElementById("ano").innerHTML += "<option value= '"+i+"'>"+ i + "</Option>";
}


console.log(data_user);
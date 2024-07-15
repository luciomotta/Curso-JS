/*   ** JSON **
JSON significa JavaScript Object Notation que traduzido pro portuguès fica algo 
como notação de objeto JavaScript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto 
em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, 
já que o formato de texto é lido por praticamente toda liguagem de programação.

Para trabalhar com JSON no Javascript usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON
*/

const carro = {
    marca : 'Fiat',
    modelo : 'Uno',
    ano : 2010,
    motor : ["1.6","1.8","2.0","2.4"]
}

console.log('Objeto carro: '+carro);
document.getElementById('output').innerHTML = 'Objeto carro: '+carro; //Erro p/ trazer o objeto


//Convertendo o objeto carro em texto JSON com JSON.stringify() e exibindo no console ou HTML
let texto = JSON.stringify(carro);
console.log('Objeto carro em JSON: '+texto);
document.getElementById('output').innerHTML += '<br></br>Objeto carro em JSON: '+texto;

//Convertendo o texto JSON em objeto com JSON.parse() e exibindo no console
let obj = JSON.parse(texto);
//pegar um ATRIBUTO do objeto

//pegar um ATRIBUTO do objeto
console.log('Modelo do carro: '+obj.motor[2]+' '+obj.modelo);

console.log(obj);
////////////////////////////////////////////////////////////////////////////////////////////////////

//Quando usar isto na prática 

//Quando você precisa enviar dados para um servidor, você deve convertê-los em JSON ex(_VIACeEP_)
//Quando você recebe dados de um servidor, você deve convertê-los em um objeto JavaScript

function buscarCEP(){
    let campoTexto = document.getElementById('cep').value;
    console.log('CEP digitado: '+campoTexto);

    const ajax = new XMLHttpRequest(); // accessing the server
    ajax.open('GET','https://viacep.com.br/ws/'+campoTexto+'/json/');
    ajax.send();

    ajax.onload = function(){
        document.getElementById('output').innerHTML += '<br><br>CEP: '+this.responseText;
        // Getting only one attribute requires converting to an object
        let obj = JSON.parse(this.responseText);
        alert('CEP: '+obj.cep+' '+obj.logradouro+'('+obj.uf+')');
    }
}

/* Laço de Repetição For Laços oferecem um jeito fácil e 
rápido de executar uma ação repetidas vezes. */


function contador(){
    const input01 = document.getElementById("option_user");
    const input02 = document.getElementById("input_user");
    var N_1 = 0;
    var N_2 = 0;
    var elemento = document.getElementById("main");
    
    if (input01.value !== null && input01.value !== '') {
        N_1 = parseInt(input01.value);
        input02.disabled = true;
    } else if (input02.value !== '' && !isNaN(parseInt(input02.value))) {
        N_2 = parseInt(input02.value);
        input01.disabled = true;
    } else {
        alert('Coloque um valor válido!');
        input01.disabled = false;
        input02.disabled = false;
        elemento.style.backgroundColor = "white";
        elemento.style.color = "black";
        document.getElementById("test").innerHTML =  " ";
    }
    
    console.log(N_1 + N_2);
    N_1 = N_1 + N_2
    

    
    switch (N_1){
        case null:
        case '':
            elemento.style.backgroundColor = "white";
            break;
        case 5:
            elemento.style.backgroundColor = "blue";
            break;
        case 15:
            elemento.style.backgroundColor="black";
            elemento.style.color="white"
        break;

        case 30:
            elemento.style.backgroundColor="Green"
        break;

        default:
            
            for (let i = 1; i <= N_1; i++) {
                if (i===N_1) {
                    document.getElementById("test").innerHTML += i + '.';
                }else{
                    document.getElementById("test").innerHTML += i + ", ";
                }
                elemento.style.backgroundColor="yellow"
            }
            elemento.style.color="blue"
            break;

    }

    document.getElementById("test").innerHTML += ".";

};


var data_user = new Date().getFullYear();
for (let i=data_user; i >= 1990 ; i--){
    document.getElementById("ano").innerHTML += "<option value= '"+i+"'>"+ i + "</Option>";
}

console.log(data_user);


const Carro = ["Porshe", "GM", "VW", "Ferrari"];

var tamanho = Carro.length
for (let i = 0; i <tamanho; i++) {
    document.getElementById('car').innerHTML +=Carro[i] + ' ';
}
/*Desta maneira ele ja sepaparia cada item
// Iterar sobre o array e formatar cada item
const formattedItems = Carro.map(item => `\ ${item}`).join(' / ');

// Inserir no elemento HTML com id 'car'
document.getElementById('car').innerHTML += formattedItems;
*/


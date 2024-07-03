function eventClick() {
    //alert('Clicou em mim');
    document.body.style.background = "green";
}
function Vermelho() {
    document.body.style.backgroundColor= "red";
}

function eventoDbClick() {
    alert('Evento de Click duplo')
}

function viraVermelho() {
    let div = document.getElementById("test");
    div.style.backgroundColor= "red";
}
function viraAzul() {
    let div = document.getElementById("test");
    div.style.backgroundColor= "Blue";
}

function AddTexto() {
    let TextArea = document.getElementById("test02");
    TextArea.append('o MOUSE SE MOVEU!!! <br>');
}

function trocaColorInput() {
    let input = document.getElementById("input");
    input.style.backgroundColor = "Green";
    input.value=" [Focado troca a cor do input (onfocus())]";
}

function mudou() {
    let select = document.getElementById("list");
    let ValorSelecionado = select.value;

    let input = document.getElementById("input");
    input.value = ValorSelecionado;

}
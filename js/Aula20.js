let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
function addTarefa() {
    //Contador p\ o ID da DIV
    ++ contador;
    //pegar o valor digitado no input
    let valorinput = input.value;

    //Se não for vazio, nem nulo, nem indefinido
    if ((valorinput.trim() !== " ") && (valorinput.trim() !== null) && (valorinput.trim() !== undefined)) {
        let novoItem = `
                    <div class="item" id="${contador}">
                <!-- Lista de tarefas -->
                 <div id="icone_${contador}" class="item-icon" onclick="marcarTarefa(${contador})" >
                    <i class="fa-regular fa-circle"></i>
                 </div>
                 <div class="item-nome" onclick="marcarTarefa(${contador})">
                    <p>${valorinput}</p>

                 </div>
                 <div class="item-botao">
                    <button class="delete" onclick="deletar(${contador})"><i class="fas fa-trash"></i>Remover</button>

                 </div>
            </div>
        `;

        //Adicionar o novo item na lista
        main.innerHTML += novoItem;

        //ZERAR OS CAMPINHOS
        input.value = "";
        input.focus();

    }

}

input.addEventListener("keyup", function (event){
    //SE CLICLOU ENTER (13)
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});

function marcarTarefa(id) {
    var tarefa = document.getElementById(id);
    var classe = tarefa.getAttribute('class');
    console.log(classe);

    // Encontra o elemento <i> dentro do div do ícone da tarefa
    var icone = document.querySelector('#icone_' + id + ' i');

    if(classe === "item"){
        tarefa.classList.add('clicado'); // Adiciona a classe 'clicado' para marcar visualmente a tarefa como concluída

        // Atualiza as classes do ícone para mostrar o ícone de tarefa marcada
        icone.classList.remove('fa-regular', 'fa-circle'); 
        icone.classList.add('fas', 'fa-check-circle'); 
    }else{
        tarefa.classList.remove('clicado'); // Remove a classe 'clicado' para marcar a tarefa como não concluída

        // Atualiza as classes do ícone para mostrar o ícone de tarefa não marcada
        icone.classList.remove('fas', 'fa-check-circle'); 
        icone.classList.add('fa-regular', 'fa-circle'); 
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();


}
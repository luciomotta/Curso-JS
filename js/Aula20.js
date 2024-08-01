let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

// Função para adicionar tarefa
function addTarefa() {
    ++contador;
    let valorinput = input.value;

    if ((valorinput !== "") && (valorinput !== null) && (valorinput !== undefined)) {
        let novoItem = `
            <div class="item" id="${contador}">
                <div id="icone_${contador}" class="item-icon" onclick="marcarTarefa(${contador})">
                    <i class="fa-regular fa-circle"></i>
                </div>
                <div class="item-nome" onclick="marcarTarefa(${contador})">
                    <p>${valorinput}</p>
                </div>
                <div class="item-botao">
                    <button class="delete" onclick="deletar(${contador})"><i class="fas fa-trash"></i> Remover</button>
                </div>
            </div>
        `;
        main.innerHTML += novoItem;

        // Salvar no localStorage
        salvarTarefas();

        input.value = "";
        input.focus();
    }
}

// Função para marcar tarefa
function marcarTarefa(id) {
    let tarefa = document.getElementById(id);
    let icone = document.querySelector('#icone_' + id + ' i');

    if (tarefa.classList.contains('clicado')) {
        tarefa.classList.remove('clicado');
        icone.classList.remove('fas', 'fa-check-circle');
        icone.classList.add('fa-regular', 'fa-circle');
    } else {
        tarefa.classList.add('clicado');
        icone.classList.remove('fa-regular', 'fa-circle');
        icone.classList.add('fas', 'fa-check-circle');
    }

    // Atualizar o estado no localStorage
    salvarTarefas();
}

// Função para deletar tarefa
function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();

    // Atualizar o localStorage
    salvarTarefas();
}

// Função para salvar tarefas no localStorage
function salvarTarefas() {
    let tarefas = [];
    document.querySelectorAll('.item').forEach(item => {
        let tarefa = {
            id: item.id,
            texto: item.querySelector('.item-nome p').innerText,
            concluida: item.classList.contains('clicado')
        };
        tarefas.push(tarefa);
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função para carregar tarefas do localStorage
function carregarTarefas() {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.forEach(tarefa => {
        let novoItem = `
            <div class="item ${tarefa.concluida ? 'clicado' : ''}" id="${tarefa.id}">
                <div id="icone_${tarefa.id}" class="item-icon" onclick="marcarTarefa(${tarefa.id})">
                    <i class="${tarefa.concluida ? 'fas fa-check-circle' : 'fa-regular fa-circle'}"></i>
                </div>
                <div class="item-nome" onclick="marcarTarefa(${tarefa.id})">
                    <p>${tarefa.texto}</p>
                </div>
                <div class="item-botao">
                    <button class="delete" onclick="deletar(${tarefa.id})"><i class="fas fa-trash"></i> Remover</button>
                </div>
            </div>
        `;
        main.innerHTML += novoItem;
    });
}

// Carregar tarefas ao carregar a página
window.onload = function() {
    carregarTarefas();
};

// Adicionar tarefa com Enter
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});

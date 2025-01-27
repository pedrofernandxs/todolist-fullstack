const tbody = document.querySelector('tbody');
const adicionarFormulario = document.querySelector('.adicionar-formulario');
const inputTarefa = document.querySelector('.adicionar-tarefa');


// FUNÇÃO PARA BUSCAR DADOS NA NOSSA API
const fetchTarefas = async () => {
    const response = await fetch('http://localhost:3333/tarefas');
    const tarefas = await response.json()
    return tarefas;
}


const adicionarTarefas = async (event) => {
    event.preventDefault();

    const tarefa = { titulo: inputTarefa.value };

    await fetch('http://localhost:3333/tarefas', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tarefa)
    });

    carregarTarefas();
    inputTarefa.value = '';
};

const deletarTarefa = async (id) => {
    await fetch(`http://localhost:3333/tarefas/${id}`, {
        method: 'delete',
    });

    carregarTarefas();
}

const atualizarTarefa = async (tarefa) => {
    
    const  { id, titulo, criado_em, status } = tarefa;   
    await fetch(`http://localhost:3333/tarefas/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, status })
    });

    carregarTarefas();
}

//FORMATAR A DATA DE UTC PARA PT-BR
const formatarData = (dataUTC) => {
    const opções = {
        dateStyle: 'long',
        timeStyle: 'short'
    }
    const data = new Date(dataUTC).toLocaleString('pt-br', opções);
    return data;

}

const criarSelectNoHTML = (valor) => {
    const options = `
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluido">Concluído</option>
    `;
   
    const select = criarElemento('select', '', options);

    select.value = valor;
    
    // Função para alterar o background-color do select
    const alterarCorFundo = () => {
        if (select.value === 'concluido') {
            select.style.backgroundColor = 'greenyellow';
        }
    };

    // Chama a função para definir a cor inicial ao carregar
    alterarCorFundo();

    // Adiciona o event listener para alterar a cor quando o valor mudar
    select.addEventListener('change', ({ target }) => {
        atualizarTarefa({ ...tarefa, status: target.value });
        alterarCorFundo(); // Atualiza a cor de fundo quando o status mudar
    });

    return select;
};


const criarElemento = (tag, innerText = '', innerHTML = '') => {
    const elemento = document.createElement(tag);
    
    if (innerText) {
        elemento.innerText = innerText;
    }
    
    if (innerHTML) {
        elemento.innerHTML = innerHTML;
    } 

    return elemento;
}

const criarTarefasNoFront = (tarefa) => {
    // desestruturação
    const { id, titulo, criado_em, status } = tarefa;
   
    // CRIAR AS TAGS HTML
    const tr = criarElemento('tr');
    const tdTitulo = criarElemento('td', titulo);
    const tdCriadoEm = criarElemento('td', formatarData(criado_em));
    const tdStatus = criarElemento('td');
    const tdAções = criarElemento('td');   
    const select = criarSelectNoHTML(status);
    
    select.id = "status";
    select.addEventListener('change', ({ target }) => atualizarTarefa({ ...tarefa, status: target.value }));

    // CRIAR OS BOTÕES
    const botãoEditar = criarElemento('button', '', '<span class="material-symbols-outlined">edit</span>');
    const botãoDeletar = criarElemento('button', '', '<span class="material-symbols-outlined">delete</span>');

    // erro
    const formularioDeEdição = document.createElement('form');
    const editarInput = document.createElement('input');
    
    editarInput.value = titulo;
    formularioDeEdição.appendChild(editarInput);

    formularioDeEdição.addEventListener('submit', (event) => {
        event.preventDefault();

        atualizarTarefa({ id, titulo: editarInput.value, status });

    });

    botãoEditar.addEventListener('click', () => {
        tdTitulo.innerText = '';
        tdTitulo.appendChild(formularioDeEdição);
    });

    // ADICIONAR AS CLASSES DOS BOTOES
    botãoDeletar.classList.add('botao-de-ação');
    botãoEditar.classList.add('botao-de-ação');

    
    botãoDeletar.addEventListener('click', () => deletarTarefa(id));
    
    // ADICIONAR AS TAGS NO CORPO DO HTML
    tdStatus.appendChild(select)
    
    tdAções.appendChild(botãoEditar) 
    tdAções.appendChild(botãoDeletar)
    
    tr.appendChild(tdTitulo);
    tr.appendChild(tdCriadoEm);
    tr.appendChild(tdStatus);
    tr.appendChild(tdAções);
    
    return tr;
}

const carregarTarefas = async () => {
    const tarefas = await fetchTarefas();

tbody.innerHTML = '';

    tarefas.forEach((tarefa) => {
        const tr = criarTarefasNoFront(tarefa);
        tbody.appendChild(tr);
    });
};

adicionarFormulario.addEventListener('submit', adicionarTarefas);

carregarTarefas();


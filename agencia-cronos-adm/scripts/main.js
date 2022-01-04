'use strict';

//objetos

let servicos = [
  {
    nome: 'Desenvolvimento Web',
    descricao: 'Cursinho de front-end',
    id: 1,
    img: 'imagens/ilustra-web.png',
  },
  {
    nome: 'Marketing Digital',
    descricao: 'Marketeiros de Kottler',
    id: 2,
    img: 'imagens/ilustra-marketing.png',
  },
  {
    nome: 'Consultoria UX',
    descricao: 'Vamo arruma esse layout/desing feio aí?',
    id: 3,
    img: 'imagens/ilustra-ux.png',
  },
];

// Criar Serviço = R do CRUD

function listarServico() {
  let imprimeServico = '';

  for (let i = 0; i < servicos.length; i++) {
    imprimeServico += `
    
    <tr>
    <td>${servicos[i].nome}</td>
    <td><img src=${servicos[i].img} class="img-fluid" /></td>
    <td>${servicos[i].descricao}</td>
    <td>
    <button class="btn btn-secondary m-1" onclick="editarServico(${servicos[i].id})">editar</button>
    <button class="btn btn-danger m-1">excluir</button>
    </td>
    </tr>
    `;
    // console.log(`Temos o serviço de ${servicos[i].nome}`)
  }

  let insereInforamacao = document.querySelector('tbody');
  insereInforamacao.innerHTML = imprimeServico;
}

// Criando os Serviços
let btnAdicaoDeServico = document.querySelector('[data-serviço="adc-servico"]');

const adicionarServico = function () {
  let novoServicoCadastrado = document.getElementById('input-nome');
  let novoServicoDescricao = document.getElementById('input-descricao');
  let novoServicoId = document.getElementById('input-id');
  let novoServicoImg = document.getElementById('input-img');

  servicos.push({
    nome: novoServicoCadastrado.value,
    descricao: novoServicoDescricao.value,
    id: novoServicoId.value,
    img: novoServicoImg.value,
  });

  listarServico();
};

btnAdicaoDeServico.addEventListener('click', adicionarServico);

listarServico();

// Editando os serviços existentes

function editarServico(id) {
  for (let i = 0; i < servicos.length; i++) {
    if (servicos[i].id === id) {
      document.querySelector('[data-edit-nome]').value = servicos[i].nome;
      document.querySelector('[data-edit-descricao]').value = servicos[i].descricao;
      document.querySelector('[data-edit-id]').value = servicos[i].id;
      document.querySelector('[data-edit-img]').value = servicos[i].img;
    }
  }
}

function salvarEdicao() {
  let editNome = document.querySelector('[data-edit-nome]');
  let editDescricao = document.querySelector('[data-edit-descricao]');
  let editId = document.querySelector('[data-edit-id]');
  let editIMG = document.querySelector('[data-edit-img]');

  for (let i = 0; i < servicos.length; i++) {
    if (editId.value == servicos[i].id) {
      servicos[i] = {
        nome: editNome.value,
        descricao: editDescricao.value,
        id: editId.value,
        img: editIMG.value,
      };
      listarServico();
    }
  }
}

document.querySelector('[data-adc-servico]').addEventListener('click', salvarEdicao);

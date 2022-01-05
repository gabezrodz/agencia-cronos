"use strict";

//objetos

let servicos = [
  {
    nome: "Desenvolvimento Web",
    descricao: "Cursinho de front-end",
    id: 1,
    img: "imagens/ilustra-web.png",
  },
  {
    nome: "Marketing Digital",
    descricao: "Marketeiros de Kottler",
    id: 2,
    img: "imagens/ilustra-marketing.png",
  },
  {
    nome: "Consultoria UX",
    descricao: "Vamo arruma esse layout/desing feio aí?",
    id: 3,
    img: "imagens/ilustra-ux.png",
  },
];

// Criar Serviço = R do CRUD

function listarServico() {
  let imprimeServico = "";

  for (let i = 0; i < servicos.length; i++) {
    imprimeServico += `
    
    <tr>
    <td>${servicos[i].nome}</td>
    <td>${servicos[i].id}</td>
    <td><img src=${servicos[i].img} class="img-fluid" /></td>
    <td>${servicos[i].descricao}</td>
    <td>
    <button class="btn btn-secondary m-1" onclick="editarServico(${servicos[i].id})">editar</button>
    <button class="btn btn-danger m-1"  onclick=" modalDeletar(${servicos[i].id})">excluir</button>
    </td>
    </tr>
    `;
    // console.log(`Temos o serviço de ${servicos[i].nome}`)
  }

  let insereInforamacao = document.querySelector("tbody");
  insereInforamacao.innerHTML = imprimeServico;
}

// Criando os Serviços
let btnAdicaoDeServico = document.querySelector('[data-serviço="adc-servico"]');

const adicionarServico = function () {
  let novoServicoCadastrado = document.getElementById("input-nome");
  let novoServicoDescricao = document.getElementById("input-descricao");
  let novoServicoId = document.getElementById("input-id");
  let novoServicoImg = document.getElementById("input-img");

  if (
    novoServicoCadastrado.value !== "" &&
    novoServicoDescricao.value !== "" &&
    novoServicoId.value !== "" &&
    novoServicoImg.value !== ""
  ) {
    for (let i = 0; i < servicos.length; i++) {
      if (servicos[i].id == novoServicoId.value) {
        return alert("Esse ID de serviço já existe");
      }
    }
    if (novoServicoId.value > 0) {
      servicos.push({
        nome: novoServicoCadastrado.value,
        descricao: novoServicoDescricao.value,
        id: novoServicoId.value,
        img: novoServicoImg.value,
      });
      resetaInput();
      listarServico();
      cancelarNovoServico();
    } else alert("insira um valor acima de '0' para o ID");
  } else alert("Campos vazios!");
};

btnAdicaoDeServico.addEventListener("click", adicionarServico);

listarServico();

// Mostrar modal

let btnAdcNovoServico = document.querySelector("#btn-exibir");

function adcNovoServico() {
  document.querySelector(".novo-servico").style.display = "flex";
  overlay.classList.toggle("hidden");
}

btnAdcNovoServico.addEventListener("click", adcNovoServico);

// Fechar modal

let btnCancelarNovoServico = document.querySelector(
  '[data-serviço="cancelar-servico"]'
);

function cancelarNovoServico() {
  document.querySelector(".novo-servico").style.display = "none";
  resetaInput();
  overlay.classList.toggle("hidden");
}

btnCancelarNovoServico.addEventListener("click", cancelarNovoServico);

// Função de resetar Inputs

function resetaInput() {
  let inputNome = document.querySelector("#input-nome");
  let inputDescricao = document.querySelector("#input-descricao");
  let inputId = document.querySelector("#input-id");
  let inputImg = document.querySelector("#input-img");

  inputNome.value = "";
  inputDescricao.value = "";
  inputId.value = "";
  inputImg.value = "";
}

// Editando os serviços existentes

function editarServico(id) {
  for (let i = 0; i < servicos.length; i++) {
    if (servicos[i].id == id) {
      document.querySelector("[data-edit-nome]").value = servicos[i].nome;
      document.querySelector("[data-edit-descricao]").value =
        servicos[i].descricao;
      document.querySelector("[data-edit-id]").value = servicos[i].id;
      document.querySelector("[data-edit-img]").value = servicos[i].img;
    }
  }
  modalEditar();
}

function salvarEdicao() {
  let editNome = document.querySelector("[data-edit-nome]");
  let editDescricao = document.querySelector("[data-edit-descricao]");
  let editId = document.querySelector("[data-edit-id]");
  let editIMG = document.querySelector("[data-edit-img]");

  for (let i = 0; i < servicos.length; i++) {
    if (editId.value == servicos[i].id) {
      servicos[i] = {
        nome: editNome.value,
        descricao: editDescricao.value,
        id: editId.value,
        img: editIMG.value,
      };
      listarServico();
      modalEditar()
    }
  }
}

//modals editar
let modalEdit = document.querySelector(".modal-editar");
let overlay = document.querySelector(".overlay");

const modalEditar = function () {
  modalEdit.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

document
  .querySelector("[data-adc-servico]")
  .addEventListener("click", salvarEdicao);

//preview
const inputImg = document.querySelector('[data-input="input-img"]');
let imgPreview = document.querySelector('[data-img="edit-img"]');

const inputEditImg = document.querySelector("[data-edit-img]");
let imgEditPreview = document.querySelector('[data-img="edit-preview"]');

setInterval(function () {
  if (inputEditImg !== "") {
    imgEditPreview.src = inputEditImg.value;

  }
}, 500);

setInterval(function () {
  if (inputImg !== "") {
    imgPreview.src = inputImg.value;
    removeHiddenPreview()
  }
}, 500);


const removeHiddenPreview = function(){
  if(imgPreview.src = inputImg.value){
    imgPreview.classList.remove("hidden")
  } else {
    imgPreview.classList.add("hidden")
  }
}



//Funções de deletar


const modalDelete = document.querySelector(".modal-delete");

const inputDeletar = document.querySelector("#input-delete");
const modalDeletar = (id) => {
  //Alterando o texto do modal conforme id
  const modalText = document.querySelector('[data-texto="modal-delete"');
  modalText.innerHTML = `Deseja realmente deletar o serviço de ID <span> ${id}</span>  ?`;

  //atribuindo id vigente ao modal
  const modalId = document.querySelector('[data-modal-delete="id"]');
  modalId.id = id;

  //classes para o hidden
  modalDelete.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  inputDeletar.value = "";

}

const deletarServico = (id) => {
  for (let i = 0; i < servicos.length; i++) {
    if (servicos[i].id == id) {
      
      servicos.splice(i, 1);
    }
  }
  modalDeletar();
  listarServico();
};

const deletarServicoModal = function () {
  for (let i = 0; i < servicos.length; i++) {
    if (servicos[i].id == modalDelete.id) {
      if (inputDeletar.value === modalDelete.id) {
        deletarServico(servicos[i].id);
        inputDeletar.value = "";
        return;
      } else {
        alert("Digite o ID correto para prosseguir!");
        inputDeletar.value = "";
        return;
      }
    }
  }
}


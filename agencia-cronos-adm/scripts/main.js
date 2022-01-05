//botões
let btnAdicaoDeServico = document.querySelector('[data-serviço="adc-servico"]');
let btnAdcNovoServico = document.querySelector("[data-btn-exibir]");
let btnCancelarNovoServico = document.querySelector(
  '[data-serviço="cancelar-servico"]'
);

//inputs
let novoServicoCadastrado = document.querySelector("[data-input='nome']");
let novoServicoDescricao = document.querySelector("[data-input='descricao']");
let novoServicoId = document.querySelector("[data-input='id']");
let novoServicoImg = document.querySelector("[data-input='img']");
let inputImg = document.querySelector('[data-input="img"]');
let inputEditImg = document.querySelector("[data-edit-img]");
let inputDeletar = document.querySelector('[data-input="input-delete"]');

//Seletores  diversos do DOM
let modalDelete = document.querySelector("[data-modal-delete]");
let modalText = document.querySelector('[data-texto="modal-delete"');
let imgPreview = document.querySelector('[data-img="preview-img"]');
let imgEditPreview = document.querySelector('[data-img="edit-preview"]');
let modalEdit = document.querySelector("[data-modal-editar]");
let overlay = document.querySelector("[data-overlay]");

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

// imprimir/listar Serviços
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
  }
  let insereInforamacao = document.querySelector("tbody");
  insereInforamacao.innerHTML = imprimeServico;
}

// Criando os Serviços
const adicionarServico = function () {
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

//modal Novo Serviço
function adcNovoServico() {
  document.querySelector(".novo-servico").style.display = "flex";
  overlay.classList.toggle("hidden");
}

function cancelarNovoServico() {
  document.querySelector(".novo-servico").style.display = "none";
  resetaInput();
  overlay.classList.toggle("hidden");
}

// Função de resetar Inputs modal adicionar
function resetaInput() {
  novoServicoCadastrado.value = "";
  novoServicoDescricao.value = "";
  novoServicoId.value = "";
  novoServicoImg.value = "";
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
      modalEditar();
    }
  }
}

//modals editar
const modalEditar = function () {
  modalEdit.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};
document
  .querySelector("[data-adc-servico]")
  .addEventListener("click", salvarEdicao);


//preview
setInterval(function () {
  if (inputEditImg !== "") {
    imgEditPreview.src = inputEditImg.value;
  }
}, 500);

setInterval(function () {
  if (inputImg !== "") {
    imgPreview.src = inputImg.value;
    removeHiddenPreview();
  }
}, 500);

const removeHiddenPreview = function () {
  if ((imgPreview.src = inputImg.value)) {
    imgPreview.classList.remove("hidden");
  } else {
    imgPreview.classList.add("hidden");
  }
};

//Funções de deletar
const modalDeletar = (id) => {
  modalText.innerHTML = `Deseja realmente deletar o serviço de ID <span> ${id}</span>  ?`;
  modalDelete.id = id;
  inputDeletar.value = "";
  modalDelete.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

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
        alert(`Digite o ID " ${servicos[i].id} " para prosseguir!`);
        inputDeletar.value = "";
        return;
      }
    }
  }
};

//Eventlisteners e funções
listarServico();
btnAdicaoDeServico.addEventListener("click", adicionarServico);
btnAdcNovoServico.addEventListener("click", adcNovoServico);
btnCancelarNovoServico.addEventListener("click", cancelarNovoServico);
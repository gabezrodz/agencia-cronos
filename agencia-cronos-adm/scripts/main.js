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
    <td><img src=${servicos[i].img} class="img-fluid" /></td>
    <td>${servicos[i].descricao}</td>
    <td>
      <button class="btn btn-secondary m-1">editar</button>
      <button class="btn btn-danger m-1">excluir</button>
    </td>
  </tr>
  `;

    // console.log(`Temos o serviço de ${servicos[i].nome}`)
  }

  let insereInforamacao = document.querySelector("tbody");

  insereInforamacao.innerHTML = imprimeServico;
}

listarServico();

import React from 'react'



export default function Body() {
    return (
        <div>
    <header>
      <div class="container">
        <a href="#">
          <img src="imagens/CRONOS-logo-white.png" alt="Agência CRONOS" />
        </a>
        <h1>Painel administrativo</h1>
      </div>
    </header>
    <section id="servicos" class="py-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <h3>Serviços</h3>
            <button class="btn btn-primary" id="btn-exibir" data-btn-exibir>
              Adicionar novo
            </button>
            <div class="novo-servico hidden">
              <div class="modal-conteudo modals">
                <i
                  class="far fa-window-close x-add"
                  onclick="cancelarNovoServico()"
                ></i>
                <div>
                  <h4>Insira abaixo as informações:</h4>
                </div>
                <div>
                  <h6>Serviço:</h6>
                  <input
                    type="text"
                    placeholder="Nome do serviço"
                    id="input-nome"
                    data-input="nome"
                  />
                </div>
                <div>
                  <h6>Descrição:</h6>
                  <input
                    type="text"
                    placeholder="Descrição do serviço"
                    id="input-descricao"
                    data-input='descricao'
                  />
                </div>
                <div>
                  <h6>ID:</h6>
                  <input
                    type="number"
                    placeholder="ID do serviço"
                    id="input-id"
                    data-input='id'
                  />
                </div>
                <div>
                  <h6>Link da imagem de exibição:</h6>
                  <input
                    type="text"
                    placeholder=" Link da imagem do curso"
                    id="input-img"
                    data-input="img"
                  />
                  <img
                    src=""
                    alt="preview"
                    class="imgPreview"
                    data-img="preview-img"
                  />
                </div>
                <div>
                  <button class="btn btn-primary" data-serviço="adc-servico">
                    Adicionar
                  </button>
                  <button
                    class="btn btn-cancel"
                    data-serviço="cancelar-servico"
                  >
                    CANCELAR
                  </button>
                </div>
              </div>
            </div>
            <div class="modal-editar hidden" data-modal-editar>
              <section class="modal-conteudo modals modal-editar">
                <i
                  class="far fa-window-close x-add"
                  onclick="modalEditar()"
                ></i>
                <div>
                  <h4 class="texto-h4-editar">
                    Digite abaixo as alterações desejadas:
                  </h4>
                </div>
                <div>
                  <h6>Curso:</h6>
                  <input
                    type="text"
                    placeholder="Nome do curso"
                    data-edit-nome
                  />
                </div>
                <div>
                  <h6>Descrição:</h6>
                  <input
                    type="text"
                    placeholder="Conteúdo, duração, etc"
                    data-edit-descricao
                  />
                </div>
                <div>
                  <h6>ID do serviço:</h6>
                  <input type="number" data-edit-id />
                </div>
                <div>
                  <h6>Link da imagem de exibição:</h6>
                  <input
                    type="text"
                    placeholder=" Link da imagem do curso"
                    data-edit-img
                  />
                  <img
                    src=""
                    alt="preview"
                    class="imgEditPreview"
                    data-img="edit-preview"
                  />
                </div>
                <div>
                  <div class="btns-Modal-editar">
                    <button class="btn btn-primary" data-adc-servico>
                      Salvar
                    </button>
                    <button class="btn btn-cancel" onclick="modalEditar()">
                      CANCELAR
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div class="modal-delete hidden" id="" data-modal-delete>
              <i
                class="far fa-window-close x-delete"
                onclick="modalDeletar()"
              ></i>
              <h4 data-texto="modal-delete">
                Deseja realmente excluir o serviço " " ?
              </h4>
              <p>Digite abaixo o ID do serviço para iniciar a exclusão:</p>
              <div>
                <input
                  type="text"
                  name="input-delete"
                  id="input-delete"
                  class="input-delete"
                  data-input="input-delete"
                />
              </div>
              <div>
                <button
                  class="btn btn-primary btn-confirm"
                  onclick="deletarServicoModal ()"
                  data-btn="confirm"
                >
                  CONFIRMAR
                </button>
              </div>
            </div>
            <table class="table my-5">
              <thead>
                <tr>
                  <td>Nome</td>
                  <td>ID</td>
                  <td>Imagem</td>
                  <td>Descrição</td>
                  <td>Ações</td>
                </tr>
              </thead>
              <tbody data-listagem-servico></tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="overlay hidden" data-overlay></div>
    </section>
    <footer class="py-3 bg-light">
      <div class="container text-center">
        <p class="m-0">
          copyright 2021
          <img
            src="imagens/CRONOS-logo-black.png"
            alt="logo"
            class="logo-footer"
          />
        </p>
      </div>
    </footer>
        </div>
    )
}



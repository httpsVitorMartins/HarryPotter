function salvar() {
  const foto = document.getElementById('fotoInput').value;
  const nome = document.getElementById('nome').value;
  const bio = document.getElementById('bio').value;
  const chog = document.getElementById('chogw').value;

  localStorage.setItem('foto', imagemAtual);
  localStorage.setItem('nome', nome);
  localStorage.setItem('chogw', chog);
  localStorage.setItem('bio', bio);
  localStorage.setItem('idade', idade);

}


function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td> //nome
    <td>${item.}</td> //nome do user
    <td>${item.senha}</td>//senha
    <td>${item.email}</td>//email
    <td>${item.}</td> data de nacimento
    <td>${item.}</td>//casa de hogwarts
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if () {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
     else {
    itens.push({})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
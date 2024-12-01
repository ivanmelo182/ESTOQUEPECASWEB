
const form = document.getElementById('cadastro-produto');
const produtosCadastrados = document.getElementById('produtos-cadastrados');

form.addEventListener('submit', (e) => {
 e.preventDefault();
 const foto = document.getElementById('foto').files[0];
 const nome = document.getElementById('nome').value;
 const custo = document.getElementById('custo').value;
 const local = document.getElementById('local').value;
 
 const produto = {
 nome,
 custo,
 local,
 foto: URL.createObjectURL(foto)
 };
 
 produtosCadastrados.innerHTML += `
 <div>
 <img src="${produto.foto}" width="100">
 <p>Nome: ${produto.nome}</p>
 <p>Custo: R$ ${produto.custo}</p>
 <p>Local: ${produto.local}</p>
 </div>
 `;
 
 form.reset();
});

document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    document.querySelector('#btn-cadastrar').addEventListener('click', btnCadastrarClick);
}

function btnCadastrarClick(evet) {
    const form = document.querySelector('.form-acao');
    const nome = form.nome.value;
    const valor = form.valor.value;

    const row = document.createElement('tr');
    const infoNome = document.createElement('td');
    const infoValor = document.createElement('td');
    const infoDica = document.createElement('td');

    infoNome.textContent = nome;
    infoValor.textContent = valor;
    infoDica.textContent = (valor > 50) ? ("Vende") : ((valor < 50) ? ("Compra") : ("Mantem"));
    infoDica.classList.add((valor > 50) ? ("acima-cota") : ((valor < 50) ? ("abaixo-cota") : ("igual-cota")));

    row.appendChild(infoNome);
    row.appendChild(infoValor);
    row.appendChild(infoDica);

    const tabela = document.querySelector('.tabela-acoes tbody');
    tabela.prepend(row);
}

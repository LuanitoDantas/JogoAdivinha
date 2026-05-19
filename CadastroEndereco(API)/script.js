//1. Ouvir o evento de quando o usuário sair do campo de CEP
document.getElementById('cep').addEventListener('blur', (evento) => { //O blur é o evento de quando o usuário sai do campo, ou seja, quando ele termina de digitar o CEP e clica fora do campo
const elemento = evento.target; //Pega o elemento que disparou o evento, ou seja, o campo de CEP
const cepInformado = elemento.value; //Pega o valor do campo de CEP

//2.Validar o CEP
if(!(cepInformado.length === 8)){
    return;
}

//3.Consultar a API ViaCEP
//3.1 Promessa de que o fetch vai buscar esse recurso
fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
.then(response => response.json()) //3.2 Promessa de que a resposta da API vai ser convertida para JSON
.then(data => {
//Processamento da pagina
if(!data.erro){
    document.getElementById('logradouro').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('estado').value = data.uf;
}else{
    alert('CEP não encontrado');
}
})
.catch(error => console.error('Erro ao consultar o CEP:', error)); //3.3 Promessa de que se houver um erro na consulta, ele será exibido no console
}); //Blur é o evento de quando o usuário sai do campo, ou seja, quando ele termina de digitar o CEP e clica fora do campo



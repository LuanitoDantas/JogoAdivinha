const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0],
]

//Funcoes utilitarias 
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor<0;
const somaValor = (total, valor) => total+valor;

//Obter valores do formulario
const obterValorInformado = () => parseFloat(obterElemento("valor").value);
const obterCategoriaInformada = () => obterElemento("categoria").value; 

//Obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

//Atualizar o valor da matriz 
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);


const atualizarInterface = () => {
    matrizGastos.forEach(([nome,valor]) => {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$${valor}`
    })
}

const limparCampos = () => obterElemento('valor').value ="";


function adicionarGasto(){
    const valorInformado = obterValorInformado();
    const categoriaInformada = obterCategoriaInformada();

    if(valorNegativo(valorInformado)){
        alert("Valor Invalido. Não pode ser negativo!");
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformada );
    const total = obterCategoria(matrizGastos, "Total");
    atualizaValorCategoria(categoria, valorInformado);
    atualizaValorCategoria(total, valorInformado);

    atualizarInterface();

    limparCampos();

    //Pegar o valor informado 

    //Pegar categoria informada 

    //impedir numeros negativos

    //De acordo com a categoria atualiza o valor


    //Criar variaveis para armazenar o valor de cada categoria 

    //Atualizar interface

    //Limpar campo





}
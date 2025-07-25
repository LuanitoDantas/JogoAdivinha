class Bilheteria{
    constructor(valor){
        this.valor = parseFloat(valor);
        this.ingresso = "";
        this.troco = 0;
    }

calcularValor(){
    if(this.valor<7){
        return{
        mensagem: "O valor inserido não pode comprar nenhum ingresso no momento",
        tipo: null,
        troco: 0,
        };
    }
    if (this.valor>=14){
        this.ingresso="inteira!";
        this.troco = this.valor - 14;
    }
    else if (this.valor>=7){
        this.ingresso = "meia";
        this.troco = this.valor - 7;
    }

    return {
        mensagem : "Voce comprou uma entrada : " + this.ingresso,
        tipo: this.ingresso,
        troco: this.troco.toFixed(2),
    };
}
}

function calcular(){
    const valorInput = document.getElementById("valor").value;
    const resultadoDiv = document.getElementById("resultado");

    const bilheteria = new Bilheteria(valorInput);
    const resultado = bilheteria.calcularValor();

if (resultado.tipo) {
    resultadoDiv.innerHTML = `
      <p><strong>${resultado.mensagem}</strong></p>
      <p>Tipo do ingresso: ${resultado.tipo}</p>
      <p>Troco: R$ ${resultado.troco}</p>
    `;
} else {
    resultadoDiv.innerHTML = `
      <p style="color:red;"><strong>${resultado.mensagem}</strong></p>
    `;
  }
}
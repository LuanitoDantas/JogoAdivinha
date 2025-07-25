class Parquimetro {
  constructor(valor) {
    this.valor = parseFloat(valor);
    this.tempo = 0;
    this.troco = 0;
  }

  calcularTempoeTroco() {
    if (this.valor < 1) {
      return {
        mensagem: "Valor insuficiente. Insira no mínimo 1 real!",
        tempo: 0,
        troco: 0,
      };
    }

    if (this.valor >= 3) {
      this.tempo = 120;
      this.troco = this.valor - 3;
    } else if (this.valor >= 1.75) {
      this.tempo = 60;
      this.troco = this.valor - 1.75;
    } else if (this.valor >= 1) {
      this.tempo = 30;
      this.troco = this.valor - 1;
    }

    return {
      mensagem: "Tempo calculado!",
      tempo: this.tempo,
      troco: this.troco.toFixed(2),
    };
  }
}


function simular() {
  const valorInput = document.getElementById("valor").value;
  const resultadoDiv = document.getElementById("resultado");

  const parquimetro = new Parquimetro(valorInput);
  const resultado = parquimetro.calcularTempoeTroco();

if (resultado.tempo > 0) {
  resultadoDiv.innerHTML = `
    <p><strong>${resultado.mensagem}</strong></p>
    <p>Tempo de permanência: ${resultado.tempo} minutos</p>
    <p>Troco: R$ ${resultado.troco}</p>
  `;
} else {
  resultadoDiv.innerHTML = `
    <p style="color:red;"><strong>${resultado.mensagem}</strong></p>
  `;
}

       }

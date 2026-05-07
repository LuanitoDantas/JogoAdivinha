class ContaBancaria {
    constructor() {
        this._saldo = 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    sacar(valor) {
        this._saldo -= valor;
    }

    temSaldoParaSacar(valor) {
        return this._saldo >= valor;
    }

    get saldo() {
        return this._saldo;
    }
}

class CaixaEletronico {
    constructor(conta) {
        this.conta = conta;
    }

    depositar() {
        const valorDeposito = parseFloat(
            document.getElementById("valorDeposito").value
        );

        this.conta.depositar(valorDeposito);

        this.mostrarSaldo(this.conta.saldo);
    }

    sacar() {
        const valorSaque = parseFloat(
            document.getElementById("valorSaque").value
        );

        if (this.conta.temSaldoParaSacar(valorSaque)) {
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo);
        } else {
            this.mostrarSaldo("Insuficiente");
        }
    }

    mostrarSaldo(saldo) {
        document.getElementById("saldo").textContent =
            `Saldo: R$ ${saldo}`;

        document.getElementById("valorDeposito").value = "";
        document.getElementById("valorSaque").value = "";
    }
}

const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);
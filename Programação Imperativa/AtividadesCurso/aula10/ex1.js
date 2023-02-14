export function ContaBancaria(titular, numero, tipo, saldo){
    this.nome = titular;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
}

let minhaConta = new ContaBancaria("Rafael", 123, "Conta Corrente", 1500.00)

console.log(minhaConta)
const moment = require("moment");
const { exibirTela, calculaValor, troco, pagamento } = require("./lib/funcoes");
const { produtos } = require("./model/dados");

const dinheiro = 200;

let valorTotal = 0;

const data = moment().format("DD/MM/YYYY hh:mm A")
exibirTela("------------------- Americanas -------------------")
exibirTela(`---- Lista de Produtos -- ${data} ----`)
for ( let i=0; i < produtos.length; i++) {
    valorTotal += calculaValor(produtos[i].qtd, produtos[i].valor)
    exibirTela(`${produtos[i].id} - ${produtos[i].nome} R$: ${produtos[i].valor} - Quantidade(s): ${produtos[i].qtd} - Valor: R$: ${calculaValor(produtos[i].qtd, produtos[i].valor)}`)
}


exibirTela(`---------------------------> Total: R$ ${valorTotal}`)

troco(dinheiro, valorTotal)

exibirTela(`${pagamento(exibirTela, dinheiro, valorTotal, troco)}`)
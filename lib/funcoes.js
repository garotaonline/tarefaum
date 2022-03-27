exports.exibirTela = (valor) => {
    console.log(valor)
}

exports.calculaValor = (qtd, valor) => {
    return qtd * valor
}

exports.troco = (dinheiro, valorTotal) => {
    return dinheiro - valorTotal
}

exports.pagamento = (exibirTela, dinheiro, valorTotal, troco) => {
    if(valorTotal < dinheiro) {
        return exibirTela(`Você conseguir realizar a compra e tem R$: ${troco(dinheiro, valorTotal)} de troco`)
    } else {
        return exibirTela(`Você não tem dinheiro suficiente!`)
    }
}
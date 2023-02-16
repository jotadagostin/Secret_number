function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        console.log('valor invalido');
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log(`Valor inválido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}`);
    }
}

function chuteForInvalido(numero) {
    return Number.isNan(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
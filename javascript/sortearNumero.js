const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor


const elementoMaiorvalor = document.getElementById('maior-valor')
elementoMaiorvalor.innerHTML = maiorValor
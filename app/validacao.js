function validacaoChute(chute) {
    if(chute == 'game over'){
        document.body.innerHTML = `
        <h2 class='titulo'>Fim de jogo!!!</h2>
        <h3 class='descricao'>O número secreto era ${numeroSecreto}
        <br>
        <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `
    }
    const numero = +chute
    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div> Valor invalido! </div>'
        return
    }
    if (validacaoMaiorMenor(numero)) {
        elementoChute.innerHTML += `<div> Valor fora dos limites! Tente um número entre ${menorValor} e ${maiorValor}! </div>`
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2 class='titulo'>Você Acertou!!!</h2>
        <h3 class='descricao'>O número secreto era ${numeroSecreto}
        <br>
        <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `
    }else if(numero < numeroSecreto){
        elementoChute.innerHTML += '<div>O número secreto é maior!<i class="fa-solid fa-arrow-up-long"></i></div>'
    }else{
        elementoChute.innerHTML += '<div>O número secreto é menor!<i class="fa-solid fa-arrow-down-long"></i></div>'
    }

}

function validacaoMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click',e=> {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
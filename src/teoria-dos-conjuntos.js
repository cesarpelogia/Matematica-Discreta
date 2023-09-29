window.addEventListener('load', () => {
    submitConjuntoPotencia()
    submitDiferencaDosConjuntos()
    submitInterseccaoDosConjuntos()
    submitUniaoDosConjuntos()
    submitVerificacaoDosConjuntos()

    buttonClearSubmit()
})

function submitConjuntoPotencia()
{
    let containerResult = document.querySelector('.conjunto-potencia .resultado')

    hidenResult(containerResult)

    let form = document.conjuntoPotencia
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        hidenResult(containerResult)

        let valor = form.conjunto.value
        let conjunto = valor.split(",")

        if (conjunto.length <= 1) {
            showError(containerResult, 'Conjunto inválido')
            return
        }

        let messageResult = ''
        for (let potencia of conjuntoPotencia(conjunto)) {
            messageResult += `${potencia.toString()} <br>`
        }

        showResult(containerResult, messageResult)
    })
}

function submitDiferencaDosConjuntos()
{
    let containerResult = document.querySelector('.diferenca-dos-conjuntos .resultado')

    hidenResult(containerResult)

    let form = document.diferencaDosConjuntos
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        hidenResult(containerResult)

        let valorConjuntoA = form.conjuntoA.value
        let conjuntoA = valorConjuntoA.split(",")

        let valorConjuntoB = form.conjuntoB.value
        let conjuntoB = valorConjuntoB.split(",")

        if (conjuntoA.length <= 1 || conjuntoB.length <= 1) {
            showError(containerResult, 'Conjunto inválido')
            return
        }

        let messageResult = ''
        for (let potencia of diferencaConjuntos(conjuntoA, conjuntoB)) {
            messageResult += `${potencia.toString()} <br>`
        }

        showResult(containerResult, messageResult)
    })
}

function submitInterseccaoDosConjuntos()
{
    let containerResult = document.querySelector('.interseccao-dos-conjuntos .resultado')

    hidenResult(containerResult)

    let form = document.intereseccaoDosConjuntos
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        hidenResult(containerResult)

        let valorConjuntoA = form.conjuntoA.value
        let conjuntoA = valorConjuntoA.split(",")

        let valorConjuntoB = form.conjuntoB.value
        let conjuntoB = valorConjuntoB.split(",")

        if (conjuntoA.length <= 1 || conjuntoB.length <= 1) {
            showError(containerResult, 'Conjunto inválido')
            return
        }

        let messageResult = ''
        for (let potencia of intersecaoConjuntos(conjuntoA, conjuntoB)) {
            messageResult += `${potencia.toString()} <br>`
        }

        showResult(containerResult, messageResult)
    })
}


function submitUniaoDosConjuntos()
{
    let containerResult = document.querySelector('.uniao-dos-conjuntos .resultado')

    hidenResult(containerResult)

    let form = document.uniaoDosConjuntos
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        hidenResult(containerResult)

        let valorConjuntoA = form.conjuntoA.value
        let conjuntoA = valorConjuntoA.split(",")

        let valorConjuntoB = form.conjuntoB.value
        let conjuntoB = valorConjuntoB.split(",")

        if (conjuntoA.length <= 1 || conjuntoB.length <= 1) {
            showError(containerResult, 'Conjunto inválido')
            return
        }

        let messageResult = ''
        for (let potencia of uniaoConjuntos(conjuntoA, conjuntoB)) {
            messageResult += `${potencia.toString()} <br>`
        }

        showResult(containerResult, messageResult)
    })
}

function submitVerificacaoDosConjuntos()
{
    let containerResult = document.querySelector('.verificacao-dos-conjuntos .resultado')

    hidenResult(containerResult)

    let form = document.verificacaoDosConjuntos
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        hidenResult(containerResult)

        let valorConjuntoA = form.conjuntoA.value
        let conjuntoA = valorConjuntoA.split(",")

        let valorConjuntoB = form.conjuntoB.value
        let conjuntoB = valorConjuntoB.split(",")


        if (conjuntoA.length <= 1 || conjuntoB.length <= 1) {
            showError(containerResult, 'Conjunto inválido')
            return
        }

        let messageResult = ''
        console.log(verificaSubconjunto(conjuntoA, conjuntoB))
        for (let potencia of verificaSubconjunto(conjuntoA, conjuntoB)) {
            messageResult += `${potencia.toString()} <br>`
        }

        showResult(containerResult, messageResult)
    })
}

// funções auxiliares

function buttonClearSubmit()
{
    let button = document.querySelector('.buttonClear')
    button.addEventListener('click', () => {
        let resultContainerList = document.querySelectorAll('.resultado')
        resultContainerList.forEach((element) => {

            element.innerHTML = ''
            element.hidden = true
        })
    })
}

function showError(element, message)
{
    element.classList.add('error')
    element.innerHTML = message
    element.hidden    = false
}

function showResult(element, message)
{
    element.innerHTML = message
    element.hidden    = false
}

function hidenResult(element)
{
    element.classList.remove('error')
    element.innerHTML = ''
    element.hidden    = true
}

//------------------------------------------------------------------------------
// funções teoria dos conjuntos

function conjuntoPotencia(conjunto) {
    const potencia = [[]];

    for (const elemento of conjunto) {
        const novosSubconjuntos = potencia.map(subconjunto => [...subconjunto, elemento]);
        potencia.push(...novosSubconjuntos);
    }

    return potencia;
}

function diferencaConjuntos(conjuntoA, conjuntoB) {
    const resultado = conjuntoA.filter(elemento => !conjuntoB.includes(elemento));
    return resultado;
}

function intersecaoConjuntos(conjuntoA, conjuntoB) {
    const resultado = conjuntoA.filter(elemento => conjuntoB.includes(elemento));
    return resultado;
}

function uniaoConjuntos(conjuntoA, conjuntoB) {
    const resultado = new Set([...conjuntoA, ...conjuntoB]);
    return Array.from(resultado);
}

function verificaSubconjunto(subconjunto, conjunto) {
    return subconjunto.every(elemento => conjunto.includes(elemento));
}
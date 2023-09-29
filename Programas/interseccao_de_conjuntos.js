function intersecaoConjuntos(conjuntoA, conjuntoB) {
    const resultado = conjuntoA.filter(elemento => conjuntoB.includes(elemento));
    return resultado;
}

const conjuntoA = [1, 2, 3];
const conjuntoB = [3, 4, 5];

const intersecao = intersecaoConjuntos(conjuntoA, conjuntoB);
console.log("Interseção dos conjuntos A e B:", intersecao);

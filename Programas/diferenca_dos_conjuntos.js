function diferencaConjuntos(conjuntoA, conjuntoB) {
    const resultado = conjuntoA.filter(elemento => !conjuntoB.includes(elemento));
    return resultado;
}

const conjuntoA = [1, 2, 3];
const conjuntoB = [3, 4, 5];

const diferenca = diferencaConjuntos(conjuntoA, conjuntoB);
console.log("Diferença entre os conjuntos A e B:", diferenca);

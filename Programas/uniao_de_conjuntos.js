function uniaoConjuntos(conjuntoA, conjuntoB) {
    const resultado = new Set([...conjuntoA, ...conjuntoB]);
    return Array.from(resultado);
}

const conjuntoA = [1, 2, 3];
const conjuntoB = [3, 4, 5];

const uniao = uniaoConjuntos(conjuntoA, conjuntoB);
console.log("União dos conjuntos A e B:", uniao);
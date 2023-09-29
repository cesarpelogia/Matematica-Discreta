function verificaSubconjunto(subconjunto, conjunto) {
    return subconjunto.every(elemento => conjunto.includes(elemento));
}

const conjuntoA = [1, 2, 3, 4];
const subconjuntoB = [2, 3];

const eSubconjunto = verificaSubconjunto(subconjuntoB, conjuntoA);
console.log("B é um subconjunto de A?", eSubconjunto);

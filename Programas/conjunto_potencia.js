function conjuntoPotencia(conjunto) {
    const potencia = [[]];
    for (const elemento of conjunto) {
        const novosSubconjuntos = potencia.map(subconjunto => [...subconjunto, elemento]);
        potencia.push(...novosSubconjuntos);
    }
    return potencia;
}

const conjuntoA = [1, 2, 3];

const potenciaA = conjuntoPotencia(conjuntoA);
console.log("Conjunto Potência do conjunto A:", potenciaA);

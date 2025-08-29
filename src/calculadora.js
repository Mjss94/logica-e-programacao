function somarDoisNumeros(a, b) {
    const resultado = a + b;
    return resultado;
}

function calcularMediaDeDoisNumeros(a, b) {
    // 1. Calcular a soma de dois numeros
    const resultadoSomaDeDoisNumeros = somarDoisNumeros(a, b);

    // 2. Dividir o resultado da soma por 2
    const resultadoDaMediaDeDoisNumeros = resultadoSomaDeDoisNumeros / 2;

    // 3. Retorna o resultado
    return resultadoDaMediaDeDoisNumeros;
}

module.exports ={
    somarDoisNumeros,
}
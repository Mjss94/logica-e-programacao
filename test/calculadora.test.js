const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Teste da função de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function () {
        // Coleta o resultado da função
        const resultado = somarDoisNumeros(4, 5);

        // Compara o resultado com o valor esperado
        expect(resultado).to.equal(9);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
        // Coleta o resultado da função
        const resultado = somarDoisNumeros(50, -20);

        // Compara o resultado com o valor esperado
        expect(resultado).to.equal(30);
    });
});

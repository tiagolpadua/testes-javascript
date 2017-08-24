describe('cepUtil é uma biblioteca destinada ao tratamento de CEP', function () {
    describe('validarCep é uma função que deve validar se o valor de entrada é um CEPs válido', function () {
        it('Deve validar quando o CEP for composto por dois números, seguido de um ponto, três números, um hífem e mais três números', function () {
            expect(cepUtil.validar('70.673-410')).toBeTruthy();
        });
        it('Deve invalidar se a máscara não for informada', function () {
            expect(cepUtil.validar('70673410')).toBeFalsy();
        });
        it('Deve invalidar se houverem caracteres alfabéticos', function () {
            expect(cepUtil.validar('70.673-41X')).toBeFalsy();
        });
        it('Deve invalidar se a quantidade de números estiver incorreta', function () {
            expect(cepUtil.validar('70.673-4100')).toBeFalsy();
        });
    });
});
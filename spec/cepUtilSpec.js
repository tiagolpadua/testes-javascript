
//forma de escrita mais descritiva de acordo com os requisitos
describe('cepUtil é uma biblioteca destinada ao tratamento de CEP', function () {
    describe('validarCep é uma função que deve validar se o valor de entrada é um CEPs válido', function () {
        it('Deve validar quando o CEP for composto por dois números, seguido de um ponto, três números, um hífem e mais três números', function () {
            expect(cepUtil.validar('70.673-410')).toBeTruthy();
        });
        it('Deve invalidar se a máscara não for informada', function () {
            expect(cepUtil.validar('70673410')).toBeFalsy();
        });
        it('Deve invalidar se houver caracteres alfabéticos', function () {
            expect(cepUtil.validar('70.673-41X')).toBeFalsy();
        });
        it('Deve invalidar se a quantidade de números estiver incorreta', function () {
            expect(cepUtil.validar('70.673-4100')).toBeFalsy();
        });
    });

// outra forma de escrita mais customizada, facilita na hora de ler qual teste deu erro na console, exemplo:

//MÁSCARA deve ser colocada quando cep estiver correto
//MÁSCARA não deve ser colocada quando cep for maior do que 8 números

describe('MÁSCARA', function () {
    describe("deve ser colocada", function () {
        it("quando cep estiver correto", function () {

            expect(cepUtil.colocarMascara('70673410')).toBe('70.673-410');
        });

    });
    describe("não deve ser colocada", function () {
        it("quando cep for maior do que 8 números", function () {

            expect(cepUtil.colocarMascara('706734100')).toBe('706734100');
        });
    });
    describe("não deve ser colocada", function () {
        it("quando cep estiver com letras", function () {

            expect(cepUtil.colocarMascara('aaaaaaaa')).toBe('aaaaaaaa');
        });
    });
    describe("deve ser retirada", function () {
        it("quando cep estiver formatado", function () {

            expect(cepUtil.retirarMascara('70.673-410')).toBe('70673410');
        });
    });
});
});
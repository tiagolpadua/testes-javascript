'use strict';

var cepUtil = (function () {
    function validar(cep) {
        return /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(cep);
    }

    function colocarMascara(cepSemFormatacao) {
        var cepFormatado;
        if (cepSemFormatacao.length === 8) {
            cepFormatado = cepSemFormatacao.substring(0, 2) +
                '.' + cepSemFormatacao.substring(2, 5) +
                '-' + cepSemFormatacao.substring(5, 8);
        }

        if (validar(cepFormatado)) {
            return cepFormatado;
        } else {
            throw 'Número inválido';
        }
    }

    function retirarMascara(cepFormatado) {
        return cepFormatado.replace(/\.|\-/g, '');
    }

    return {
        colocarMascara: colocarMascara,
        retirarMascara: retirarMascara,
        validar: validar
    };
})();

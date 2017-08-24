var cepUtil = (function () {
    'use strict';

    function validar(cep) {
        var objER = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
        if (!cep || !objER.test(cep)) {
            return false;
        }
        return true;
    }

    return {
        validar: validar
    };
})();

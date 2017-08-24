/* global jQuery: false */

var index = (function ($, todosEnderecos) {
  'use strict';

  function preencherEndereco(cep) {
    todosEnderecos.buscarPorCep(cep)
      .then(function (endereco) {
        $('#endereco').html(JSON.stringify(endereco));
        $('#endereco').addClass('sucesso');
      });
  }

  $('#form').on('submit', function (event) {
    $('#endereco').html('pesquisando.....');
    event.preventDefault();
    preencherEndereco($('.input-cep').val());
  });

  return {
    preencherEndereco: preencherEndereco
  };

})(jQuery);

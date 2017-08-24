/* global jQuery: false */
/* global enderecoService: false */
/* exported main */

var main = (function ($, enderecoService) {
  'use strict';

  $('#form').on('submit', function (event) {
    $('#endereco').html('Pesquisando.....');
    event.preventDefault();
    preencherEndereco($('.input-cep').val());
  });

  function preencherEndereco(cep) {
    enderecoService.buscarPorCep(cep)
      .then(function (endereco) {
        $('#endereco').html(JSON.stringify(endereco));
        $('#endereco').addClass('sucesso');
      });
  }

  return {
    preencherEndereco: preencherEndereco
  };

})(jQuery, enderecoService);

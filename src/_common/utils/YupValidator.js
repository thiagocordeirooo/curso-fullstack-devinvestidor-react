/* eslint-disable no-template-curly-in-string */

import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Este campo é obrigatório.'
  },

  string: {
    min: 'Tamanho mínimo: ${min} caracteres.',
    max: 'Tamanho máximo: ${max} caracteres.',
    email: 'Informe um e-mail válido'
  },

  array: {
    min: 'É preciso selecionar no mínimo ${min}',
    max: 'É preciso selecionar no máximo ${max}'
  },

  number: {
    max: 'O valor não pode ser maior que ${max}',
    min: 'O valor não pode ser menor que ${min}',
    integer: 'O valor deve ser inteiro.'
  }
});

export default Yup;

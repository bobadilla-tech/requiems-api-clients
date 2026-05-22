module.exports = {
  requiemsApi: {
    input: './openapi.json',
    output: {
      mode: 'split',
      target: './clientes-orval/typescript/api.ts',
      schemas: './clientes-orval/typescript/modelos',
      client: 'axios-functions',
    },
  },
};
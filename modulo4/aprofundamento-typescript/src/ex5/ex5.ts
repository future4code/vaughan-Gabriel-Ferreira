console.log('Esse é o exercício 5')

  //    Os comandos em comum aos dois arquivos são o "target" e o "module", sendo que o target
  // que foi utilizado durante a aula usa o "es6" enquanto o que foi gerado usa o "es2016".
  //    O que me chamou a atenção foi que no arquivo usado em aula, foram utilizadas configurações
  // para gerar um arquivo map, foram separados com mais organização um outDir e um rootDir (retirando
  // comentários do output) e principalmente o uso do "noImplicitAny". Acredito que esse último
  // foi usado pra acostumar a gente com boas práticas no sentido de tipar as variáveis.
  //    Já as opções do arquivo maior, são mais complicadas de compreender. Pela "esModuleInterop"
  // entendi que vai ser emitido JS adicional para facilitar o suporte de módulos CommonJS importados,
  // mas não sei o que isso significa. A "forceConsistentCasingInFileNames" facilita os imports.
  // A "strict" habilita todas as opções de checagem de tipo estritas, o que eu não sei o que significa.
  // A "skipLibCheck" pula a checagem de tipo de todos os arquivos .d e .ts.
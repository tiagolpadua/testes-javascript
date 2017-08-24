# JavaScript

## Testes de Unidade

### Instalação

* npm install -g phantomjs-prebuilt
* npm install -g phantomjs
* npm install karma --save-dev
    * npm install -g karma-cli
    * ./node_modules/karma/bin/karma start
* npm install jasmine
* npm install --save-dev karma-phantomjs-launcher
* karma init karma.conf.js


  also installed on npm install on a directory that contains package.json,
  unless you pass the --production
  not installed on npm install "$package"



  on any other directory, unless you give it the --dev option
  dependencies are installed on both:
  npm install from a directory that contains package.json
  npm install $package on any other directory



### Criando nossos testes

* https://jasmine.github.io/2.6/introduction
* criando nosso primeiro teste -- validar cep
* atenção no nome
* mostra falhando
* depois fazer funcao para colocar mascara

### Coverage
* npm install karma karma-coverage --save-dev
* reporters: ['progress', 'coverage'],
* preprocessors: {
      'src/js/*.js': ['coverage']
    },
* 100% de cobertura de codigo
* comenta o retirar mascara, a cobertura cai para 75%


### Testes de Integracao
* todosEnderecos
* criar os testes (beforeEach) -> done
* criar as promisses
* colocar jQuery
* resolvendo a promisse no PhantomJS
* roda no Chrome
* "babel-polyfill"
* 'node_modules/babel-polyfill/dist/polyfill.js',


### Testes com Spys

* spy do todosEnderecos
* como simular a tag endereco?
* npm install jasmine-jquery --save-dev
* npm install karma-jasmine-jquery
* frameworks: ['jasmine-jquery','jasmine'],
* setFixture




## Buildando projeto com Gulp
npm install --save-dev gulp gulp-clean gulp-htmlmin gulp-include gulp-inject gulp-jscs gulp-jshint gulp-rename gulp-rimraf gulp-strip-comments gulp-uglify gulp-util gulp-watch merge-stream jshint stream-series run-sequence

* clean
* teste
* pasta www
* JavaScript
* htmlmin
* watch

* browser-sync start --server --files .
> http://blog.caelum.com.br/browser-sync-indispensavel-para-desenvolver-sites-em-varios-dispositivos/

Curso 1 (React: lidando com arquivos estáticos) - Aula 1, aprendi como:

- Criar projetos usando Create React App;
- Vimos como podemos usar templates, como typescript para criar projetos com CRA e depois removemos o que não será utilizado neste projeto;
- Usar CSS Modules com TypeScript e Sass;
- Aplicamos estilos escritos em Sass via CSS Modules e adicionamos a capacidade do Visual Studio Code oferecer autocomplete dos módulos de estilos com typescript-plugin-css-modules.

Curso 1 - Aula 2, aprendi como:

- Importar um svg;
  - Vimos como o webpack entende aquela string que fornecemos ao src da tag img e porque não funciona, então, aprendemos como importar um svg da forma correta.
- Utilizar um svg como componente;
  - Melhoramos a nossa logo alterando a tag img por um componente que se torna um svg no final.
- Imports absolutos;
  - Aprendemos como configurar e utilizar os imports absolutos para evitar voltar muitas pastas ao importar um arquivo.
- Utilizar a biblioteca reset css para resetar o css;
  - Resetamos os estilos da nossa página utilizando uma biblioteca chamada reset.css que nos ajuda a limpar os estilos padrões de cada elemento de acordo com cada navegador.

Curso 1 - Aula 3, aprendi como:

- Importar fontes externas
  - Aprendemos como importar fontes externas no nosso projeto utilizando o google fonts.
- Utilizar o normalize.css
  - Utilizamos o normalize.css para padronizar os estilos da página html em cada navegador.
- Utilizar ícones
  - Aprendemos como é fácil utilizar ícones com a biblioteca react-icons.
- Ignorar arquivos para build
  - Vimos como ignorar arquivos no momentos de build para que sejam utilizados apenas quando os chamar.
- Criar variáveis css
  -Criamos variáveis css para nos auxiliar na padronização dos estilos da página, evitando repetição e facilitando na manutenção de código.

Curso 1 - Aula 4, aprendi como:

- Inferir o tipo de um objeto
  - O operador typeof nos permite inferir a tipagem de um objeto sem a necessidade de criar uma interface.
- Manipulação de objetos
  - Utilizamos [] em volta do nome da chave de um objeto quando o valor da chave é dinâmico.
- Biblioteca classnames
  - Essa biblioteca nos permite concatenar classes CSS utilizando sintaxe de objetos.

Curso 1 - Aula 5, aprendi como:

- Renderizar uma lista de componentes
  - Podemos utilizar o spread operator para não precisar passar as props manualmente quando temos total controle do componente.
- Utilizar a pasta public
  - Arquivos estáticos que devem ser referenciados dinamicamente precisam estar dentro dessa pasta.
- Gerar os arquivos utilizados em produção
  - Com o comando npm run build podemos verificar quais arquivos estarão presentes no ambiente de produção.

Curso 1 - Aula 6, aprendi como:

- Buscar com expressão regular
  - Utilizar expressões regulares em buscas de textos.
- Manipular elementos de uma lista
  - Alterar a quantidade ou ordenar os elementos de uma lista com métodos filter e sort.
- Tipar o useState
  - Escrever useState<Tipo> para tipar o state e o setState.

Continuação do curso...

Curso 2 (React: conhecendo a biblioteca React Router) - Aula 1, aprendi como:

- ESLint;
  - O que é e como configurar o ESLint.
- Como corrigir erros de código seguindo as regras da configuração;
- Criar a página de início da aplicação.

Curso 2 - Aula 2, aprendi como:

- Separar os dados do cardápio para uma pasta separada;
- BrowserRouter e HashRouter;
  - Diferença entre BrowserRouter e HashRouter.
- Routes;
  - Utilizar o routes para alternar entre rotas.

Curso 2 - Aula 3, aprendi como:

- Reutilizar o menu;
- Reaproveitar o header utilizando o react-router-dom;
- Utilizar o componente Link;
- Fazer a página padrão.

Curso 2 - Aula 4, aprendi como:

- Desenvolver um tema para a aplicação;
- Aplicar o componente Outlet do react-router-dom;
- Utilizar o hook useNavigate para navegar entre rotas;
- Criar uma tela not found para páginas não encontradas.

Curso 2 - Aula 5, aprendi como:

- Criar a rota pratos;
- Passar parâmetros na rota;
- Criar detalhes do prato;
- Utilizar o hook useLocation;
- Passar estados entre rotas;
- Refatorar tags.

Curso 2 - Aula 6, aprendi como:

- Acrescentar a tela NotFound na tela de detalhes;
- Utilizar o componente Redirect;
- Resolver o header.

Curso 3 (React: otimizando a performance) - Aula 1, aprendi:

- Como funciona o JSX;
- O que é React.createElement;
- Como o React transforma os códigos JSX em objetos;
- O que é Virtual DOM;
- Como funciona uma estrutura React.

Curso 3 - Aula 2, aprendi:

- O que é Reconciliation;
- O que é Imutabilidade e o que isto tem a ver com React;
- O que é memoização e como utilizar o React.memo;
- Como controlar com memo quando um componente deve atualizar ou não.

Curso 3 - Aula 3, aprendi:

- O que é e para que serve a prop key;
- O que é a extensão React Developer Tools;
- Como utilizar a aba components da extensão;
- Como utilizar a aba profiler da extensão;
- Como avaliar se um componente está renderizando ou não utilizando a extensão.

Curso 3 - Aula 4, aprendi:

- Como memoizar componentes de pacotes externos;
- Como analisar se um componente deve ser memoizado;
- A diferença entre memo e useMemo.

Curso 3 - Aula 5, aprendi:

- O que é Lazy Loading;
- O que é Dynamic import;
- O que é Code splitting;
- Como utilizar o React.lazy.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

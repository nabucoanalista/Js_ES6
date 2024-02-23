// O que é axios?

// axios é um cliente HTTP baseado em Promises para fazer requisições. Ele pode ser utilizado tanto no navegador quando no Node.js. Ele é uma biblioteca muito poderosa e fácil de utilizar. Deixando o código mais limpo e legível e mais fácil para trabalhos com APIs.

// Documentação do jsonplaceholder: https://jsonplaceholder.typicode.com/

// 1 - Requisições "request" com axios

console.log('Requisições "request" com axios');

// Para fazer uma requisição com axios, basta chamar o método axios passando a URL da requisição. O método axios retorna uma Promise, que pode ser tratada com .then() e .catch(). O método get() nos traz dados de algum lugar. Utilizamos um try catch para tratar os erros. async function serve para dizer que a função é assíncrona.

// Exemplo 1 - Requisição GET

const getData = async () => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users',
        );

        console.log(response);

        return response.data;

    } catch (error) {

        console.error(error);

    }
};

getData();

// O exemplo acima faz uma requisição GET para a URL 'https://jsonplaceholder.typicode.com/users'. O método get() retorna uma Promise, que é tratada com .then() e .catch(). O método .then() retorna a resposta da requisição, que é tratada com o método .catch() para tratar os erros.

// 2 - Exibindo dados na tela

console.log('Exibindo dados na tela');

// Agora que já sabemos como fazer uma requisição com axios, vamos exibir os dados na tela. Para isso, vamos criar uma função que exibe os dados na tela. Vamos utilizar o método map() para percorrer o array de usuários e exibir os dados na tela.

const container = document.querySelector('#user-container');

const printData = async () => {

    const data = await getData();

    console.log(data);

    data.forEach((user) => {

        const div = document.createElement('div');

        const nameElement = document.createElement('h2');

        nameElement.textContent = user.name;

        div.appendChild(nameElement);

        const emailElement = document.createElement('p');

        emailElement.textContent = user.email;

        div.appendChild(emailElement);

        container.appendChild(div);

    });

};

printData();

// O exemplo acima cria uma função printData() que exibe os dados na tela. A função printData() chama a função getData() para obter os dados. Em seguida, a função printData() percorre o array de usuários e exibe os dados na tela. Os dados vem da requisição GET feita com axios, que é tratada com .then() e .catch(). trazendo os dados da api.

// 3 - Headers

console.log('Headers');

// Os headers são informações que são enviadas junto com a requisição. Podemos enviar headers para a API, como por exemplo, o token de autenticação. Para enviar headers com axios, basta passar um objeto como segundo argumento do método axios. O objeto deve conter a chave headers e o valor é um objeto com os headers que queremos enviar.

// Utilizarei o mesmo exemplo do início, mas agora com headers.
/*
const getData = async () => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users',

            // Headers
            {
                headers: {
                    'Content-Type': 'application/json', // esses comandos são os headers, eles são enviados junto com a requisição para a API. ps: não são todos os headers que são enviados, apenas os que são passados como argumento. e os comandos devem ser escritos exatamente como estão aqui.
                    custom: 'headers', // esse é um exemplo de header customizado, ou seja, um header que foi criado por nós, para enviar informações específicas para a API. ex: token de autenticação.
                },
            }
        );

        console.log(response);

        return response.data;

    } catch (error) {

        console.error(error);

    }
};

getData();
*/

// O exemplo acima faz uma requisição GET para a URL 'https://jsonplaceholder.typicode.com/users'. O método get() retorna uma Promise, que é tratada com .then() e .catch(). O método .then() retorna a resposta da requisição, que é tratada com o método .catch() para tratar os erros. O segundo argumento do método axios é um objeto que contém a chave headers e o valor é um objeto com os headers que queremos enviar. Fizemos 2 exemplos de headers, um deles é o 'Content-Type': 'application/json' e o outro é um header customizado, que é o 'custom': 'headers'. no caso do padrão devemos escrever exatamente como está escrito aqui, ja no caso do custom, podemos escrever o que quisermos.

// 4 - Requisições POST

console.log('Requisições POST');

// O método post() é utilizado para enviar dados para a API. O método post() recebe dois argumentos, a URL da requisição e os dados que queremos enviar. O método post() retorna uma Promise, que é tratada com .then() e .catch(). O método .then() retorna a resposta da requisição, que é tratada com o método .catch() para tratar os erros. É necessario configurar a propriedade body do objeto que é passado como segundo argumento do método axios. O body é um objeto que contém os dados que queremos enviar para a API.

const form = document.querySelector('#post-form');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');

// os comandos a cima são para pegar os elementos do formulário e os inputs do formulário.

form.addEventListener('submit', (e) => {
    e.preventDefault(); // previne o comportamento padrão do formulário, que é enviar os dados para a URL que está no atributo action do formulário. Agora quando clico em enviar, a pagina não é recarregada, isso ocorre por causa do preventDefault que é um método que previne o comportamento padrão do formulário.

    axios.post('https://jsonplaceholder.typicode.com/posts', { // aqui estamos fazendo uma requisição POST para a URL 'https://jsonplaceholder.typicode.com/posts'. O segundo argumento do método axios é um objeto que contém os dados que queremos enviar para a API. O objeto body contém os dados que queremos enviar para a API. No caso, estamos enviando um título e um corpo para a API.
        title: titleInput.value, // o valor do input title, abaixo tá o mesmo para o input body, a API requer um id, mas o id é gerado automaticamente pela API, então não precisamos pedir que o usuário insira um id.
        body: bodyInput.value,
        userId: 1,
    }) 
        
});

// O exemplo acima faz uma requisição POST para a URL 'https://jsonplaceholder.typicode.com/posts'. com o axios, fica muito mais fácil fazer requisições POST, pois ele já faz a requisição e retorna a resposta da requisição. Ele converte autiomáticamente para jason.
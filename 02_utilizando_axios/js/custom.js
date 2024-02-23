// 6 - Custom Instance do axios

console.log('Custom Instance do axios');

// Podemos criar uma instância customizada do axios. Uma instância customizada do axios é um objeto que contém as configurações padrão do axios. Podemos criar uma instância customizada do axios utilizando o método create do axios. O método create do axios retorna uma instância customizada do axios. Podemos utilizar a instância customizada do axios para fazer requisições para uma API específica. Para criar uma instância customizada do axios, basta chamar o método create do axios e passar um objeto com as configurações padrão do axios.

const postsFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

// Agora, podemos utilizar a instância customizada do axios para fazer requisições para a API 'https://jsonplaceholder.typicode.com'. A instância customizada do axios terá a baseURL que definimos. Isso é útil quando estamos trabalhando com uma API específica e não queremos repetir a URL base em todas as requisições.

// Agora voce vai até o script.js e mudar a chamada do axios para postsFetch.get('/posts') lá no try... e verá que a requisição ainda funciona, mas agora com a baseURL que definimos. exemplo:

/*const getData = async () => {
    try {
        const response = await postsFetch.get(
            '/users',
        );

        console.log(response);

        return response.data;

    } catch (error) {

        console.error(error);

    }
};

getData(); */

// Agora, todas as requisições feitas com a instância customizada do axios terão a baseURL que definimos. Isso é útil quando estamos trabalhando com uma API específica e não queremos repetir a URL base em todas as requisições. tbm muda o post. exemplo:

/*form.addEventListener('submit', (e) => {
    e.preventDefault();

    postsFetch.post('/posts', {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1,
    }) 
        
});*/

// Agora, podemos utilizar a instância customizada do axios para fazer requisições para a API 'https://jsonplaceholder.typicode.com'. A instância customizada do axios terá a baseURL que definimos. Isso é útil quando estamos trabalhando com uma API específica e não queremos repetir a URL base em todas as requisições.  lembrando que a global tem que ser comentada para funcionar. não pode ter duas instâncias do axios rodando ao mesmo tempo.

// Tambem da para adicionar headers a instância customizada do axios...
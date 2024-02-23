// 5 - Global Instance do axios

console.log('Global Instance do axios');

// Podemos alterar diretamente as configurações do axios, como por exemplo, a baseURL. A baseURL é a URL base que será utilizada em todas as requisições. Para alterar as configurações do axios, basta acessar a propriedade defaults do axios. A propriedade defaults é um objeto que contém as configurações padrão do axios. Podemos alterar as configurações padrão do axios, como por exemplo, a baseURL. A baseURL é a URL base que será utilizada em todas as requisições. Para alterar a baseURL do axios, basta acessar a propriedade defaults do axios e alterar a propriedade baseURL.

axios.defaults.headers.common['Accept'] = 'application/json'; // esse comando é para alterar o header padrão do axios, que é o Accept, para application/json.
axios.defaults.headers.common['Authorization'] = 'MEUTOKENDOAPP'; // esse comando é para alterar o header padrão do axios, que é o Authorization, para MEUTOKENDOAPP.

// Agora, todas as requisições feitas com axios terão a baseURL que definimos. Isso é útil quando estamos trabalhando com uma API específica e não queremos repetir a URL base em todas as requisições.
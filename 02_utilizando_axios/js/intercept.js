// Requisição

axios.interceptors.request.use(
    function (config) {
        console.log('Antes da requisição...');
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Resposta

axios.interceptors.response.use(
    function (response) {
        console.log('Antes da resposta...');
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// como estou usando a instância customizada do axios, não preciso mais usar o axios.interceptors.request.use e o axios.interceptors.response.use, pois já estão configurados na instância customizada do axios. ou poderia usar o postsFetch.interceptors.request.use e o postsFetch.interceptors.response.use, mas não é necessário.  lembrando que a global tem que ser comentada para funcionar. não pode ter duas instâncias do axios rodando ao mesmo tempo. rever isso
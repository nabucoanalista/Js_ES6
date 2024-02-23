// 1 - Var, Let e Const

console.log('01 - Var, Let e Const');

// A diferença entre var, let e const é o escopo. Var tem escopo global e de função, let e const tem escopo global, de função e de bloco. 

// Exemplo de var:

var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log(x);
}

console.log(x);

// No exemplo acima, a variável x é redeclarada dentro do bloco if, e o valor de x é alterado de 10 para 5.

// Exemplo de let:

let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}

console.log(a);

// No exemplo acima, a variável a é redeclarada dentro do bloco if, mas o valor de a não é alterado, dentro do bloco if a variável a tem valor 5, mas fora do bloco if a variável a tem valor 10.

// Exemplo de const:

function logName() {
    const name = 'João';
    console.log(name);
}

const name = 'Maria';

logName();

console.log(name);

// No exemplo acima, a variável name é redeclarada dentro da função logName, mas o valor de name não é alterado, dentro da função logName a variável name tem valor 'João', mas fora da função logName a variável name tem valor 'Maria'. é uma boa prática declarar variáveis como const, e só usar let quando for necessário reatribuir um valor a variável.


// 2 - Arrow Functions

console.log('02 - Arrow Functions');

// Arrow functions são uma forma mais curta de escrever funções, e tem um comportamento diferente de funções normais. Arrow functions não tem seu próprio this, arguments, super ou new.target, e não podem ser usadas como construtoras. Arrow functions são sempre anônimas.

// Exemplo de função normal:

const sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 5));

// Exemplo de arrow function:

const arrowSum = (a, b) => a + b;

console.log(arrowSum(5, 5));

const greeting = (name) => {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return 'Hello';
    }
};

console.log(greeting('Pedro')); // Aqui o resultado será 'Hello, Pedro!' pois o parâmetro name foi passado.
console.log(greeting()); // Aqui o resultado será 'Hello' pois o parâmetro name não foi passado.

const user = {
    name: 'Lucas',
    sayUserName() { // Método normal... Aqui o this é o objeto user. nessas funções, o this é o objeto que chamou a função.
        setTimeout(function () {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 1000);
    },
    sayUserNameArrow() { // Método arrow... Aqui o this é o objeto user. a diferença é que o this é o this do escopo onde a função foi criada, e não o this do escopo onde a função foi chamada.
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 2000);
    },
};

user.sayUserName(); // Nesse exemplo, a função sayUserName() não consegue acessar o this.name, pois o this dentro da função setTimeout não é o mesmo this da função sayUserName().
user.sayUserNameArrow(); // Nesse exemplo, a função sayUserNameArrow() consegue acessar o this.name, pois o this dentro da função setTimeout é o mesmo this da função sayUserNameArrow().

// No exemplo acima, a função sayUserName() não consegue acessar o this.name, pois o this dentro da função setTimeout não é o mesmo this da função sayUserName(), já a função sayUserNameArrow() consegue acessar o this.name, pois o this dentro da função setTimeout é o mesmo this da função sayUserNameArrow().

// 3 - Filter

console.log('03 - Filter');

// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida. Nas palavras do MDN, o método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const higNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
});

console.log(higNumbers);

// No exemplo acima, o método filter() criou um novo array com todos os elementos que passaram no teste implementado pela função fornecida, ou seja, o novo array contém todos os números maiores ou iguais a 3.

const users = [
    { name: 'Lucas', available: true },
    { name: 'Pedro', available: false },
    { name: 'Maria', available: true },
    { name: 'João', available: false },
    { name: 'Ana', available: true },
];

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

// No exemplo acima, o método filter() criou um novo array com todos os elementos que passaram no teste implementado pela função fornecida, ou seja, o novo array contém todos os usuários disponíveis, caso eu quisesse um array com todos os usuários indisponíveis, eu poderia fazer users.filter((user) => !user.available).

// 4 - Map

console.log('04 - Map');

// O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array. Nas palavras do MDN, o método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array. é utilizado quando se quer transformar um array em outro array.

const products = [
    { name: 'Mouse', price: 30, category: 'Informática' },
    { name: 'Teclado', price: 50, category: 'Informática' },
    { name: 'Monitor', price: 450, category: 'Informática' },
    { name: 'Cadeira', price: 150, category: 'Móveis' },
    { name: 'Mesa', price: 250, category: 'Móveis' },
    { name: 'Celular', price: 850, category: 'Eletrônicos' },
    { name: 'Fone de Ouvido', price: 150, category: 'Eletrônicos' },
]

products.map((product) => {
    if (product.category === 'Informática') {
        product.onSale = true;
    }
});

console.log(products);

// No exemplo acima, o método map() criou um novo array com os resultados da chamada de uma função para cada elemento do array, ou seja, o novo array contém todos os produtos da categoria 'Informática' com a propriedade onSale igual a true.

// 5 - Template Literals

console.log('05 - Template Literals');

// Template literals são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas. Nas palavras do MDN, template literals são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas. Os textos ficam entre crases, e as expressões ficam entre ${}.

const userName = 'Beto';
const userAge = 25;

console.log(`O nome do usuário é ${userName} e ele tem ${userAge} anos.`);

// No exemplo acima, o template literal foi utilizado para interpolar as variáveis userName e userAge dentro da string. logo a frase 'O nome do usuário é Beto e ele tem 25 anos.' será exibida no console.

// 6 - Destructuring

console.log('06 - Destructuring');

// Destructuring é uma forma de extrair valores de arrays ou objetos e atribuí-los a variáveis. Nas palavras do MDN, destructuring é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas. é uma forma de extrair valores de arrays ou objetos e atribuí-los a variáveis.

const fruits = ['Banana', 'Maçã', 'Pera', 'Uva'];

const [f1, f2, f3, f4] = fruits; //ps o nome das variáveis pode ser qualquer um, mas a ordem das variáveis deve ser a mesma ordem dos elementos do array. E a expressão é feita com colchetes.

console.log(f1, f2, f3, f4);

const productDetails = {
    name: 'Mouse',
    price: 30.99,
    category: 'periféricos',
    color: 'preto'
};

const { name: productName, price, category, color } = productDetails;

console.log(
    `O nome do produto é ${productName}, custa R$: ${price}, e é da categoria ${category}, e é da cor ${color}.`
);

// No exemplo acima, o destructuring foi utilizado para extrair os valores do array fruits e do objeto productDetails e atribuí-los a variáveis.

// 7 - Spread Operator

console.log('07 - Spread Operator');

// O spread operator é uma forma de espalhar os elementos de um array ou objeto em outro array ou objeto. Nas palavras do MDN, o spread operator é uma forma de espalhar os elementos de um array ou objeto em outro array ou objeto. é utilizado para copiar arrays e objetos.

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2]; //ps o spread operator é feito com três pontos.

console.log(a3);

// No exemplo acima, o spread operator foi utilizado para espalhar os elementos dos arrays a1 e a2 em um novo array a3.

const a4 = [0, ...a3, 7];

console.log(a4);

// No exemplo acima, o spread operator foi utilizado para espalhar os elementos do array a3 em um novo array a4.

const carName = { name: 'Fusca' };
const carBrand = { brand: 'Volkswagen' };
const otherInfo = { km: 10000, price: 49999 };

const car = { ...carName, ...carBrand, ...otherInfo };

console.log(car);

// No exemplo acima, o spread operator foi utilizado para espalhar as propriedades dos objetos carName, carBrand e otherInfo em um novo objeto car.

// 8 - Classes

console.log('08 - Classes');

// Classes são uma forma de criar objetos em JavaScript. Nas palavras do MDN, classes são "a forma de criar objetos em JavaScript". Classes da acesso a recursos como: construtores, métodos, getters e setters. Antes do ES6, classes eram criadas com funções construtoras.

class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productwithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new product('Camiseta', 20);

console.log(shirt);

console.log(shirt.productwithDiscount(10));
console.log(shirt.productwithDiscount(15));

// No exemplo acima, a classe product foi utilizada para criar um objeto shirt, e o método productwithDiscount foi utilizado para calcular o preço da camiseta com desconto.

// 9 - Herança

console.log('09 - Herança');

// Herança é um dos pilares da programação orientada a objetos, e é a capacidade de criar uma classe que herda propriedades e métodos de outra classe. Nas palavras do MDN, herança é a capacidade de criar uma classe que herda propriedades e métodos de outra classe. é utilizada para reutilizar código. A palavra chave extends é utilizada para criar uma classe filha e a palavra chave super é utilizada para chamar o construtor da classe pai.

class productWithAttributes extends product {

    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log('As cores são: ');
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}


const hat = new productWithAttributes('Boné', 29.99, [
    'Preto',
    'Branco',
    'Vermelho',
]);

console.log(hat);

console.log(hat.name);

hat.showColors();

// No exemplo acima, a classe productWithAttributes foi utilizada para criar um objeto hat, e o método showColors foi utilizado para exibir as cores do boné.
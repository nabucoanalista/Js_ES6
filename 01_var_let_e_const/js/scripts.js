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

























/**
 * Exercícios manipulação de array
 */


// Remover todos os elementos inválidos do array
const ex1 = [1, null, 2, 3, 4, undefined, 0, 10];

//Remover itens duplicados e ordenar o array final
const ex2 = [1,1,2,2,5,6,7,8,9,10,2,3,4,5,6,11,3,3,4];


// Reduza o seguinte array para um objeto com os dados compilados: { cachorro: 6, gato: 4 }
const ex3 = [
    {
        cachorro: 5,
        gato: 1
    },
    {
        cachorro: 1,
        gato: 0
    },
    {
        cachorro: 0,
        gato: 3
    }
]

// Verifique se todos as pessoas são obrigadas a votar

const ex4 = [{
        name: "Markin",
        age: 22
    },
    {
        
        name: "Jorge",
        age: 16
    },
    {
        name: "Jujuba",
        age: 30
    }
]

// Ordene as seguintes passagens de acordo com o número do bilhete
const ex5 = [{
        destino: "Natal",
        bilhete: 8
    },
    {
        destino: "RJ",
        bilhete: 3
    },
    {
        destino: "BH",
        bilhete: 1
    },
    {
        destino: "SP",
        bilhete: 5
    },
    {
        destino: "Ipatinga",
        bilhete: 2
    }
]


// Retorne apenas os nomes dos ESTAGIÁRIOS (não retorne quem não é estagiário) em ordem decrescente de idade
const ex6 = [{
        nome: "Jorge",
        cargo: "Estagiário",
        idade: 20
    },
    {
        nome: "Marcelina",
        cargo: "Estagiário",
        idade: 18
    },
    {
        nome: "José",
        cargo: "Analista Sênior",
        idade: 67
    },
    {
        nome: "Enzo",
        cargo: "Estagiário",
        idade: 23
    },
]

//Para finalizar, apenas dê um log em cada elemento com o texto "Elemento [Pos]: <elemento>" exemplo: Elemento 1: jujuba

const ex7 = ["jujuba", "cadeira", "mesa", "computador"]
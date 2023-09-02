/* 6) Quantos anos se passaram desde o pouso na lua em 1969: O objeto
Date em JavaScript é usado para trabalhar com datas. Sua tarefa é
obter o ano atual, subtrair 1969 dele e registrar o resultado. Consulte
a documentação oficial para mais detalhes sobre o objeto Date:

https://developer.mozilla.org/pt-
BR/docs/Web/JavaScript/Reference/Global_Objects/Date. */

let lua = new Date(1969);

let dataAtual = new Date(2023);

console.log( dataAtual - lua);
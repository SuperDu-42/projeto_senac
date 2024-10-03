const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o seu nome? ', (nome) => {
    rl.question('Qual é o salário do funcionário? ', (salario) => {
        rl.question('Em qual mês estamos? ', (mes) => {
            console.log(`O funcionário ${nome} tem um salário de ${salario} no mês de ${mes}.`)

            rl.close();
        })
    })
})

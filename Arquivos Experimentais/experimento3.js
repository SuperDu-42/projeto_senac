const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira um número: ', (num1) => {
    rl.question('Insira outro número: ', (num2) => {
        if (num1 < num2)
        {
            console.log('O número', (num1), ' é menor do que o número', (num2), '.')
        }
        else 
        {
            console.log('O número', (num1), 'é maior do que o número', (num2),'.')
        }
        rl.close();
    })
})
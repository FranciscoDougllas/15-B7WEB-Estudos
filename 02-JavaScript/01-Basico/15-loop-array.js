let cores = ['Vermelho', 'Azul', 'Verde', 'Amarelo', 'Roxo', 'Preto', 'Branco'];

for(let i = 0; i < cores.length; i ++){
    console.log(i + 1, cores[i]);
}


console.log('----------------------');
for(let i in cores){
    console.log(i, cores[i]);
}
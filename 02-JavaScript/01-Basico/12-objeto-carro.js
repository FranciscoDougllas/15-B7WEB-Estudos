let carros = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2000,
    cor: 'vermelho',

    caracteristicas: {
        motor: 1.0,
        combustivel: ['gasolina', 'alcool', 'flex'],
        portas: 4
        
    }
}

console.log(carros.caracteristicas.combustivel); // [ 'gasolina', 'alcool', 'flex' ]

console.log(carros.caracteristicas.combustivel[0]); // gasolina
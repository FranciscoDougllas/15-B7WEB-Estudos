function calcularImovel(metragem, quartos){
    let valor = 0;
    if (metragem < 50){
        valor = 10000;
    } else if (metragem < 100){
        valor = 20000;
    } else {
        valor = 30000;
    }
    if (quartos > 2){
        valor += 10000;
    }
    return valor;
}

console.log(calcularImovel(40, 3));
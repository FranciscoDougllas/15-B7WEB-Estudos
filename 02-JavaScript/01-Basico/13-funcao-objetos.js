let pessoa = {
    nome: 'Lucas',
    sobrenome: 'Santos',
    idade: 23,
    sexo: 'Masculino',

    nomeCompleto: function() {
        return `${this.nome} ${this.idade} ${this.sexo}`;
    }
}

console.log(pessoa.nomeCompleto());
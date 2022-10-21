
const pessoa = {
    nome: 'Vitor J Guerra',
    Idade: 25,

    descrever: function () {
        console.log('Meu nome é',this.nome ,'e minha idade é' ,this.Idade);
    }
};

pessoa.descrever();
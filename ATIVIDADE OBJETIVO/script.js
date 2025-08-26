var carro = {
    marca : "Audi",
    modelo : "a3",
    ano : 2009
}
console.log(carro.marca,carro.ano,carro.modelo)

console.log(carro.marca)

carro["ano"] = "2008"

var novaProriedade = "cor"  
carro[novaProriedade] = "preto"

var pessoa = {
    nome : "Ronaldo",
    idade : 22,
    apresentar: function(){
        console.log("Ola meu nome é", pessoa.nome,"E tenho :", pessoa.idade)
    }
}

 pessoa.apresentar()
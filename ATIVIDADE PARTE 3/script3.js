function boasVindas(){
    console.log("Bem-vindo(a) ao curso de JavaScript!");
    }
   boasVindas()

   var nome = "joao"
   function saudar(nomee){
       console.log("Olá",nome);
   }
   saudar()

   var numero = 100
   function dobro(numeru){
   console.log("O dobro é:", numero*2);
}
 dobro()

 var numero1 = 100
 var numero2 = 200
   function soma(n1,n2){
   console.log("A soma é:",numero1 + numero2);
   }
   soma()

   var numeros = [3,4,5]
   function media(numera){
   console.log((3+4+5 / 2));
   }
   media()  

   var pessoa ={
    nome : "juan",
    idade : 15,
    descricaoPessoa : function(){
        console.log(pessoa.nome,"tem",pessoa.idade); 
    }
   }
   pessoa.descricaoPessoa()

   var calculadora ={
    numero1 : 10,
    numero2 : 50,
    multiplicacao : function(num1,num2){
        var mult = num1 * num2 
        console.log(mult);
    }
   }

   calculadora.multiplicacao(calculadora.numero1,calculadora.numero2)

var senha = ""
while (senha !="333"){
var senha = prompt("Digite sua senha: ")


if(senha =="333"){
    console.log("Senha correta")
}

else{
    console.log("senha incorreta")
}
}

var saldo = 20000
while("S"){
    function operacoes(escolha){
     var saque, deposito
     switch(escolha){
        case "1":
            let Saque = prompt("Quanto voce deseja sacar ?")
            var subtracao = Number(saldo) - Number(Saque)
            console.log("Agora voce possui", subtracao)
            break
            
            case "2":
                let Deposito = prompt("Quanto voce deseja depositar ?")
                var soma = Number(saldo) + Number(Deposito)
                console.log("Agora voce possui", soma)
                break
     }
    }
            var escolhaOperacao = prompt("Escolha ou a 1 ou a 2")

            operacoes(escolhaOperacao)

            var final = prompt("Voce deseja realizar outra operacao ?")
            switch (final){
                case "S":
                    break

                    case "N":
                        console.log("Volte sempre, obrigado!")
            }



}
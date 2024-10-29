let nome = "Richard";
let vitorias = 80;
let derrotas = 40;
RankDoHeroi(nome,vitorias,derrotas)

function saldoVitorias(vitorias,derrotas){
    let saldo = vitorias - derrotas;
    return saldo
}

function RankDoHeroi(nome,vitorias,derrotas){
    let saldo = saldoVitorias(vitorias,derrotas)

    if (vitorias<10){
        console.log("O herói " + nome + " tem saldo igual a " + saldo + " e está no nível Ferro")
    }else if (vitorias>=11 && vitorias<=20){
        console.log("O herói " + nome + " tem saldo igual a " + saldo + " e está no nível Bronze")
    }else if (vitorias>=21 && vitorias<=50){
        console.log("O herói " + nome + " tem saldo igual a " + saldo + " e está no nível Prata")
    }else if (vitorias>=51 && vitorias<=80){
        console.log("O herói " + nome + " tem saldo igual a " + saldo + " e está no nível Ouro")
    }else if (vitorias>=81 && vitorias<=90){
        console.log("O herói " + nome + " tem saldo igual a " + saldo + " e está no nível Diamante")
    }else if (vitorias>=91 && vitorias<=100){
        console.log("O herói " + nome + " tem saldo igual a " + saldo + " e está no nível Lendário")
    }else if (vitorias>=101){
        console.log("O herói " + nome + " tem saldo igual a " + saldo + " e está no nível Imortal")
    }
}
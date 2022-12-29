let renda = {

    receitas: [2500, 200],

    despesas: [120,300,1200]
}

function sum1(val1){

    let result = 0;

    for(let sum of val1){

        result += sum;

    }
    return result;
}

function sum2(val2){
    
    let result = 0;

    for(let sum of val2){

        result += sum;

    }

    return result
}

function howIs(){

    let val1 = sum1(renda.receitas)
    let val2 = sum2(renda.despesas)

    let sub = val1 - val2

    if(sub>0){
        console.log("R$" + sub + " sobraram, saldo positivo.")
    }
    else if(sub===0){
        console.log("Saldo zerado, situação de risco.")
    }
    else{
        console.log("Saldo negativado, em dívida.")
    }


}

console.log(howIs())
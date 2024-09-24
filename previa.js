export function maiorNumero(lista){
    
    if(lista.length > 0 && Array.isArray(lista)){ //se lista maior que zero e realmente for um array então retorna maior numero
        return Math.max(...lista)
    }else{
        return null
    }
}

export function verificarParOuImpar(num){
    
    if(typeof num === "number"){
       if(num % 2 == 0){
            return 'Par'
        }else{
            return 'Ímpar'
        }
     }else{
        return null
    }
    
    
}

export function contarCaracter(contar){
    if()
}
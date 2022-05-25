let num = document.getElementById('inputNumber')
let list =  document.getElementById('listaAberta')
let res = document.getElementById('res')

let valores = []

function Numero(n){
    if(n.value.length != 0 && n.value >= 1 && n.value <= 100){
        return true
    }else{
        return false
    }
}

function Valido(n, l){
    if(l.indexOf(Number(n.value)) == -1){
        return true
    }else{
        return false
    }
}


function validar(){
    if(Numero(num) && Valido(num,valores)){
        valores.push(Number(num.value))
        var item = window.document.createElement('option')
        item.text = `valor ${num.value} adcionado`
        list.appendChild(item)
        res.innerHTML = ''    
    }else{
        alert('Adcione um número dentro dos parametros')
    }
    num.value = ''
    num.focus()
}
function calcular(){
    if(valores.length == 0){
        alert('insira valores na lista')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor =  valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números de cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os elementos é ${soma}</p>`
        res.innerHTML += `<p>A media de todos os elementos é ${media}</p>`
    }
}
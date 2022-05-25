function contar(){
    var inicio = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('resultado')
    var emoji = '<span>&#128073;</span>'
    var emoji2 = '<span>&#129305;</span>'

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Faltam dados')
    }else if( i <= f){
        res.innerHTML = `Contando...<br>`
        while(i <= f){
            res.innerHTML += `${i}${emoji}`
            i = i + p
        }
    }else{
        res.innerHTML = `Contando... <br>`
        while(i >= f){
            res.innerHTML += `${i}${emoji}`           
            i = i - p
        }
    }
    res.innerHTML += `${emoji2}`
}
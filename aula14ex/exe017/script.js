function montar(){
    var num = window.document.getElementById('tbnum')
    var tb = window.document.getElementById('tabuada')

    if(num.value.length == 0){
        alert('Insira um valor')
    }else{
        var n = Number(num.value)
        var c = 1

        tb.innerHTML = ''
        while(c <= 10){
            let item = window.document.createElement('option')
            item.text = `${c} * ${n} = ${c*n}`
            tb.appendChild(item)
            item.value = `tb${c}`
            c++
        }
    }
}
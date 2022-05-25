
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora>= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#f4c79d'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        window.document.body.style.background = '#9ea9b5'
    }
    else{
        img.src = 'noite.png'
        window.document.body.style.background = '#0f2f5b'

    }
}

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'fmanha.png'
        document.body.style.background = '#FFDEAD'
        //manhã
    }else if (hora >= 12 && hora < 18){
        img.src = 'ftarde.png'
        document.body.style.background = '#DEB887'
        //tarde
    }else {
        img.src = 'fnoite.png'
        document.body.style.background = '#483D8B	'
        //noite
    }
    
}


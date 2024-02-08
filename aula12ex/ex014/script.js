function carregar() {
    //let hora = 19
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`

    if(hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#eed579'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#9d766c'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#051722'
    }
}


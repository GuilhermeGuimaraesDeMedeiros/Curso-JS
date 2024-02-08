function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = window.document.getElementById('res')
   
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'homemCrianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'homemJovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'homemAdulto.png')
            } else {
                img.setAttribute('src', 'homemIdoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'mulherCrianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulherJovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'mulherAdulta.png')
            } else {
                img.setAttribute('src', 'mulherIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
    
}


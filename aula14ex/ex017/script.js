function tabuada() {
let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
    /*
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }else {
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    */
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }else {
        let n = Number(num.value)
        
        tab.innerHTML = ''
        for(let c = 0; c <= 10; c++) {
            let option = document.createElement('option')
            option.text = `${n} x ${c} = ${n*c}`
            option.value = `tab${c}`
            tab.add(option)
        }
        
        }
    }





let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 80.2,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

let n = 1543.5

let formattedN = n.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})

console.log(formattedN)
let num = [5,8,4]

num[3] = 6

num.push(7)

let length = num.length

console.log(length)

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)

let sort = num.sort()
console.log(sort)
/*
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let n = 12
let p = num.indexOf(n)

console.log(`O valor ${n} está na posição ${num.indexOf(n)}`)
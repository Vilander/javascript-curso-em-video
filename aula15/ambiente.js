let num =[5,7,8]
num [3]=6
num.push(9)
console.log(`Nosso vetor é o ${num}`)

console.log(`Tamanho do array: ${num.length}`)
console.log(`O Arrya em ordem crescente é: ${num.sort()}`)

let pos =num.indexOf(8)
console.log(`O valor 8 está na posição: ${pos}`)

let posi =num.indexOf()
console.log(`O valor 3 não existe, então sera retornado o valor de -1 (quando não é encontrado o JS retorna -1):confirmando: ${posi}`)
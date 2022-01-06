let num = [5, 8, 2, 9, 3];
num.push(1);
console.log(num);
let pos = num.indexOf(2);

console.log(`O vetor tem ${num.length} posições`);
if (pos == -1) {
    console.log(`O valor não foi encontrado!`);
} else {
    console.log(`O valor 2 está na posição ${pos}\n`)
}

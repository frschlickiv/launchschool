let string = 'simplest case is when'
let arrayed = string.split(' ')
let capitalizedWords = []

for(let i = 0; i < arrayed.length; i++) {
    let word = arrayed[i];
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1))
}

console.log(capitalizedWords.join(' '))
removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

function removeLastChar(str){
    let arrStr = str.split('')
    arrStr.pop()
    console.log(arrStr.join(''))
}
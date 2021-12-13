let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = {}

for(let i = 0; i < nestedArray.length; i++){
 let pair = nestedArray[i];
 obj[pair[0]] = pair[1]    
}

console.log(obj)
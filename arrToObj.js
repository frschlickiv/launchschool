let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];


let person = {};

for (let i = 0; i < nestedArray.length; i++) {
 

  person[nestedArray[i][0]] = nestedArray[i][1];
}

console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }
let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };
  
  // Expected output:
  // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

  let flattenObj = Object.entries(person)
  console.log(flattenObj)

  nestedArray = []
  keys = Object.keys(person)
  
  for(let i = 0; i < keys.length; i += 1) {
    nestedArray.push([keys[i], person[keys[i]]]);
  }
  console.log(nestedArray);
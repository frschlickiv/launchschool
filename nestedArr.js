let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };

  let arr = []


  for(prop in person){
    arr.push([prop, person[prop]]);
  }
  
  console.log(arr)


  console.log(Object.entries(person))
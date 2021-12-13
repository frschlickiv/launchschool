let vehicle = {
    manufacturer: 'Tesla',
    model: 'Model X',
    year: 2015,
    range: 295,
    seats: 7
  };

  let arr = []
  for (prop in vehicle){
    arr.push(prop)
  }

  console.log(arr)
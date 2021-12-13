let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
    greet: function (str) {
        console.log(`Hej, ${str}`)
    }
  };
  
  jane.greet('Bobby'); // Hej, Bobby!
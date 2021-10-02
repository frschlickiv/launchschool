let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

  for (let i = 0; i < vocabulary.length; i++) { 
    for(let j = 0; j < vocabulary[i].length; j++){
        console.log(vocabulary[i][j])
    }
  }

  vocabulary.forEach((array) => {
      array.forEach(word => console.log(word));
  })
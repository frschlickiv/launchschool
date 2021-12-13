// function greet(greeting = 'Hello', recipient = 'world') {
//     console.log(greeting + ' ' + recipient);
//   }
  
 

// greet();                                // logs: Hello, world!
// greet('Salutations');                   // logs: Salutations, world!
// greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!





function greeting() {
    return 'Good morning';
  }
  
  function recipient() {
    return 'Launch School';
  }

  function greet() {
    console.log(`${greeting()}, ${recipient()}!`);
  }


greet();
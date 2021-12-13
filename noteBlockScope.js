{
    // this is a block
    let foo = 42;
    console.log(foo);
  }
  
  if (answer === 'yes') {
    // this is a block
    console.log('yes');
  } else {
    // so is this
    console.log('nope');
  }
  
  while (answer !== 'no') {
    // this is a block
    doSomething();
  }
  
  function foo() {
    // not technically a block. However, we can treat it as a block.
    let foo = 42;               // foo has block scope
    console.log(foo);
  }
  
  let foo = {
    // this is not a block
    bar: 42,
  };
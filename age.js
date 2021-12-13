// const age = (age, y) => {

//     if (y < 1) {
//       console.log("Please input years.");
//     } else {
//       age += y;
//       console.log(`In ${y} years you will be ${age} years old.`);
//     }

// };

// age(30, 0);

const age = (age, y) => {
  for (let i = y; i > 0; i--) {
    console.log(`Your age: ${age} in ${y} years is ${age + y}`);
    y -= 1;
  }
};

age(30, 12);

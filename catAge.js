function catAge (human) {
    let cat = 0
for(let i = 0; i < human; i++){
    switch(i) {
       case 0:
       cat += 0;
        break; 
       case 1:
        cat += 15
        break;
        case 2:
        cat += 9
        default:
        cat += 4;
        break;
  }
 }
 return cat
}

catAge(0);
catAge(1); 
catAge(2); 
catAge(3); 
console.log(catAge(4));
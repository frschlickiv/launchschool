function compareByLength (a, b) {
    if(a.length === b.length) {
        return 0
    } else if (a.length < b.length) {
        return -1
    } else if (a.length > b.length) {
        return 1
    }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0
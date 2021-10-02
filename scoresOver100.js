let scores = [96, 47, 113, 89, 100, 102];


const highScores = (array) => {
    let counter = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 100) {
            counter++
        }
    }
    console.log(counter)
}

highScores(scores)
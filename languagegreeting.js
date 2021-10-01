function greet (language) {
    let greeting = {
        en: 'Hi',
        fr: 'Salut',
        pt: 'Olá!',
        de: 'Hallo!',
        sv: 'Hej!',
        af: 'Haai!'
    }

    console.log(greeting[language])
}
greet('pt'); // 'Olá!'





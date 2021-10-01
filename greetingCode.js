function langExtract(lang) {
    return lang.slice(0, 2);
}

function localGreet(lang) {
    let language = langExtract(lang)
    
    let greeting = {
        en: 'Hi',
        fr: 'Salut',
        pt: 'Olá!',
        de: 'Hallo!',
        sv: 'Hej!',
        af: 'Haai!',
        
    }
console.log(greeting[language])
    }

    localGreet('en_US.UTF-8')
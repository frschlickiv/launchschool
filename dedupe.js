
function strExpand(str) {
    array = []
    let num = 1;
    for (let i = 0; i < str.length; i++){
        if (str[i] !== str[i+1]){
            array.push(str[i] + num.toString())
            num = 1
        } else if (str[i] === str[i+1]){
            num++
    }
    
    }
    return array.toString().replace(/\,/g,"");
    }

    console.log(strExpand('aabbccddeeee'))
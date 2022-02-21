

let ref = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0'
};


decodeMorse = function(morseCode){

    console.log(`morseCode => ${morseCode}`);

    let arr1 = morseCode.split('   ');

    console.log(`arr1 => ${arr1}`);

    let arr2 = arr1.map(a => {
        console.log(`a => ${typeof a}`);
        let aSplit = a.split(' ');
        console.log(`aSplit => ${aSplit}`);
        let aTransf = aSplit.map(b => ref[b]);
        console.log(`aTransf => ${aTransf}`);
        let aJoin = aTransf.join('');
        console.log(`aJoin => ${aJoin}`);
        return aJoin;
    })

    console.log(`arr2 => ${arr2}`);

    let str = arr2.join(' ');

    console.log(`arr3 => ${str}`);

    return  str;

    /*return morseCode
        .split('   ')
        .map(
            a => a
                .split(' ')
                .map(
                    b => ref[b]
                ).join('')
        ).join(' ');*/
}


console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));









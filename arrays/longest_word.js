
function LongestWord(sen) {

    const wordsArr = sen.split(' ');
    const validWords = [];

    for (let i = 0; i < wordsArr.length; i++) {
        if (!wordsArr[i].match(/[!@#$%^&*.,]/)) {
            validWords.push(wordsArr[i]);
        }
    }

    let biggerWord = {
        word: '',
        length: 0
    }

    for (let i = 0; i < validWords.length; i++) {
        if (validWords[i].length > biggerWord.length) {
            biggerWord['word'] = validWords[i];
            biggerWord['length'] = validWords[i].length
        }
    }

    // code goes here
    return biggerWord.word;

}

// keep this function call here
console.log(LongestWord("fun&!! time"));








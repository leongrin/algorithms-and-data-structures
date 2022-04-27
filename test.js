
const groupAnagrams = (strs) => {
    let grouped = {};

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const key = word.split('').sort().join('');

        if (!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(word);
    }

    return Object.values(grouped);
};


const strs = ["eat","tea","tan","ate","nat","bat"];   // expected [["bat"],["nat","tan"],["ate","eat","tea"]]
/*const strs = [""];*/   // expected [[""]]
/*const strs = ["a"];*/    // expected [["a"]]

console.log(groupAnagrams(strs));



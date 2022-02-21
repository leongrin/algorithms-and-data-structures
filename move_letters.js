/*function pigIt(str) {

    return str.split(' ')
        .map(item => {
            if (item.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/)) {
                return item
            }
            const firstLetter = item.split('')[0];
            let finalString = item.split('');
            finalString.splice(0, 1);
            return finalString.join('').concat(firstLetter, 'ay');
        })
        .join(' ');
}


console.log(pigIt('Pig latin is cool'));*/ // igPay atinlay siay oolcay


function cakes(recipe, available) {

    /*let numbers = [];

    let recNumber = 0;

    for (let avaItem in available) {
        for (let recItem in recipe) {
            if ( avaItem === recItem && available[avaItem] < recipe[recItem]) {
                console.log(`available[avaItem] => ${available[avaItem]}, recipe[recItem] => ${recipe[recItem]}`);
                return 0;
            }  else if (avaItem === recItem) {
                recNumber++;
                numbers.push(Math.floor(available[avaItem] / recipe[recItem]));
            }
        }
    }

    if (recNumber < Object.entries(recipe).length) {
        return 0;
    }

    return numbers.sort((a, b) => a - b)[0];*/

    return Object.keys(recipe).reduce(
        (val, ingredient) => Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    , Infinity)
}


console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // 2

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // 0











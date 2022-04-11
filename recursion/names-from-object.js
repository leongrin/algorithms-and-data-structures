
// Export from your streaming service like Spotify, YT Music, etc.

const artistsByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "Chris Stapleton"]
    }
}

const getNames = (data, arr = []) => {

    Object.keys(data).forEach(key => {
        if (Array.isArray(data[key])) {
            for (let item of data[key]) {
                arr.push(item);
            }
        } else {
            getNames(data[key], arr);
        }
    })

    return arr;
};


console.log(getNames(artistsByGenre));









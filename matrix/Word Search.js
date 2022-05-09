// 79. Word Search
// https://leetcode.com/problems/word-search/


const exist = (board, word) => {

    let response = false;

    function checkWord(row, column, charCount) {
        if (charCount === word.length) {
            response = true;
            return true;
        }

        if (
            row < 0 ||
            row >= board.length ||
            column < 0 ||
            column >= board[row].length ||
            board[row][column] !== word[charCount] ||
            response) {
            return false;
        }

        let temp = board[row][column];
        board[row][column] = null;

        checkWord(row + 1, column, charCount + 1);
        checkWord(row - 1, column, charCount + 1);
        checkWord(row, column + 1, charCount + 1);
        checkWord(row, column - 1, charCount + 1);

        board[row][column] = temp;
    }


    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === word[0]) {
                if (checkWord(row, col, 0)) break;
            }
        }
    }

    return response;
};


/*const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";*/   // expected true
/*const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"; */   // expected true
/*const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB";*/    // expected false
/*const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";*/     // expected true
/*const board = [
    ["C","A","A"],
    ["A","A","A"],
    ["B","C","D"]
], word = "AAB";*/   // expected true
/*const board = [
    ["a","b"],
    ["c","d"]
], word = "abcd";*/   // expected false
/*const board = [
    ["A","B","C","E"],
    ["S","F","E","S"],
    ["A","D","E","E"]
], word ="ABCESEEEFS"; */  // expected true
const board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], word = "ABCEFSADEESE";    // expected true

console.log(exist(board, word));

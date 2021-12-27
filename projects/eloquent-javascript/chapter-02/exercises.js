
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) {
  let chessBoard = [];

  // iterate over the range of the chess board
  for (let i = 0; i < x; i++) {
    // create a row variable
    let row;

    // if index is even
    if (i % 2 === 0) {
      // row is strictly equal to space
      row = " ";

      // create looping sequence to continue adding characters
      for (let i = 1; i < x; i++) {
        // if i is even
        if (i % 2 === 0) {
          // add a space
          row += " ";
          // else (if it is odd)
        } else {
          // add a hashtag
          row += "#";
        }
      }
      // else, row is assigned to hashtag
    } else {
      row = "#";

      // create another looping sequence for when the row starts with a hashtag
      for (let i = 1; i < x; i++) {
        // if i is even
        if (i % 2 === 0) {
          // row adds a hashtag
          row += "#";
          // otherwise, row adds a space
        } else {
          row += " ";
        }
      }
    }
    // push the row into the chessBoard variable
    chessBoard.push(row);
  }
  // return the chessBoard joined with a line break
  return chessBoard.join("\n") + "\n";
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

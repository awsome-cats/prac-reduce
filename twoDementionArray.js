const rows = 10;
const columns = 8;

/**
 * 1.arrayの作成1
 */
const myArray = [];

for(let i=0; i < rows; i++) {
    myArray[i] = [];
    for(let j=0; j < columns; j++) {
        myArray[i][j] = null
    }
}
console.log(myArray)

/**
 * 2.Arrayの作成2
 */

 const myArray2 = new Array(rows)

 for(let i=0; i < myArray2.length; i++) {
     myArray2[i] = new Array(columns);
 }

 console.log(myArray2)

 /**
  * Arrayの作成3
  */

  const myArray3 = Array.from(Array(rows), () => new Array(columns))
  console.log(myArray3)


const myArray4 = [[], [], []];
console.log(myArray4)

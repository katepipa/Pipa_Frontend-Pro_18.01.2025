const array = [1, 7, 83, 2, 7, 3, 4, 0, 5, 6, 7, 1, 2, 83];
removeElementFromArray(array, 7);

console.log(array);

function removeElementFromArray (array, item) {
  let indexToDelete;

  while ((indexToDelete = array.indexOf(item)) !== -1) {
    array.splice(indexToDelete, 1);
  }
}
function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length !== arr2.length) {
    return result = false;
  } 
  result = arr1.every((value, idx) => arr1[value, idx] === arr2[value, idx]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((positive) => positive >= 0).filter((numerals) => numerals % 3 === 0).map((multiply) => multiply * 10);

  return resultArr; // array
}

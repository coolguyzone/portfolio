'use strict'

function swap(arr, idx1, idx2) {

  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

}

function merge(arr1, arr2) {
  let output = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1[0]);
      arr1.shift();
    }
    else {
      output.push(arr2[0]);
      arr2.shift();
    }
  }

  if (arr1.length > 0 || arr2.length > 0) {
    output = output.concat(arr1);
    output = output.concat(arr2);
  }

  return output;
}

function partition(arr, left, right) {

}

module.exports = {
  swap,
  merge,
  partition
}

var x = [5, 4, 6, 1, 12, 35];

function sortA(arr) {
  var pivot = arr[0];
  var left = [];
  var right = [];
  if (arr.length < 2) {
    return arr;
  } else {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return sortA(left).concat(pivot, sortA(right));
}
console.log(sortA(x));

// var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];
function mergeS(x) {
  if (x.length < 2) {
    return x;
  } else {
    var mid = Math.floor(x.length / 2);
    var left = x.slice(0, mid);
    var right = x.slice(mid, x.length);
    return merge(mergeS(left), mergeS(right));
  }
}
function merge(left, right) {
  var newX = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      newX.push(left.shift());
    } else {
      newX.push(right.shift());
    }
  }
  while (left.length) {
    newX.push(left.shift());
  }
  while (right.length) {
    newX.push(right.shift());
  }
  return newX;
}
// console.log(mergeS(a));
module.exports = {
  mergeS
};

var arr = [23, 90, 109, 1, 12, 43, 87, 10];
function bubbleS(a) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
bubbleS(arr);
console.log(arr);

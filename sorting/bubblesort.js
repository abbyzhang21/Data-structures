let arr = [18, 4, 1, 23, 11, 20, 3];
const bubbleS = x => {
  let lengthX = x.length;
  for (let i = 0; i < lengthX; i++) {
    do {
      x[i] = x[i + 1];
      x[i + 1] = x[i];
    } while (x[i] < x[i + 1]);
  }

  return x;
};
bubbleS(arr);

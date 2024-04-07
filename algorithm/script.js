function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function calculateMinMaxSum() {
  const input = document.getElementById("numberInput").value;
  let arr = input.trim().split(" ").map(Number);

  if (arr.length !== 5 || arr.some(isNaN) || arr.some((num) => num < 0)) {
    alert(
      "Please enter exactly 5 valid positive integer numbers separated by spaces."
    );
    return;
  }

  arr = quickSort(arr);

  const minSum = arr.slice(0, -1).reduce((acc, curr) => acc + curr, 0);
  const maxSum = arr.slice(1).reduce((acc, curr) => acc + curr, 0);

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `${minSum} ${maxSum}`;
  resultElement.classList.add("show-result");
}

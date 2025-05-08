function getArrayParams(...arr) {
  let min = Infinity,
    max = -Infinity,
    sum = 0;
  arr.forEach(el => {
    if (el > max) {
      max = el;
    }
    if (el < min) {
      min = el;
    }
    sum += el;
  });
  const avg = (sum / arr.length).toFixed(2);
  return {
    min,
    max,
    avg: +avg
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEven = 0;
  let sumOdd = 0;
 
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
 
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEven = 0;
  let countEven = 0;
 
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }
 
  return countEven === 0 ? 0 : sumEven / countEven;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  
  return maxWorkerResult;
}

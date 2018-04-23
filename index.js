// for (var i = 1; i <= 300; i++) {
//   if (isFizzFezzBuzz(i)) {
//     console.log("FizzFezzBuzz");
//   } else if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 == 0 && i % 7 == 0) {
//     console.log("BuzzBang");
//   } else if (i % 3 == 0 && i % 7 == 0) {
//     console.log("FizzBang");
//   } else if (isBuzz(i) && i % 13 == 0) {
//     console.log("FezzBuzz");
//   } else if (isBang(i) && i % 13 == 0) {
//     console.log("FezzBang");
//   } else if (isBong(i) && i % 13 == 0) {
//     console.log("FezzBong");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (isBuzz(i)) {
//     console.log("Buzz");
//   } else if (i % 7 == 0) {
//     console.log("Bang");
//   } else if (i % 11 == 0) {
//     console.log("Bong");
//   } else if (i % 13 == 0) {
//     console.log("Fezz");
//   } else {
//     console.log(i);
//   }
// }

// function isBuzz(number) {
//   return number % 5 == 0;
// }

// function isBang(number) {
//   return number % 7 == 0;
// }

// function isBong(number) {
//   return number % 11 == 0;
// }

// function isFizzFezzBuzz(number) {
//   return number % 3 == 0 && number % 5 == 0 && number % 13 == 0;
// }

// for (var i = 1; i <= 300; i++) {
//   var array = [];
//   if (i % 3 == 0) {
//     array.push("Fizz");
//   }
//   if (i % 5 == 0) {
//     array.push("Buzz");
//   }
//   if (i % 7 == 0) {
//     array.push("Bang");
//   }
//   if (i % 11 == 0) {
//     array.push("Bong");
//   }
//   if (i % 13 == 0) {
//     array.push("Fezz");
//   }
//   if (array.length == 0) {
//     array.push(i);
//   }
//   if (i % 17 == 0) {
//     array.reverse();
//   }
//   console.log(array.join(""));
// }

for (var i = 1; i <= 300; i++) {
  var array = [];
  if (isFizz(i)) {
    array.push("Fizz");
  }
  if (isFezz(i)) {
    array.push("Fezz");
  }
  if (isBuzz(i)) {
    array.push("Buzz");
  }
  if (isBang(i)) {
    array.push("Bang");
  }
  if (isBong(i)) {
    array.push("Bong");
  }
  if (i % 17 == 0) {
    array.reverse();
  }
  if (array.length == 0) {
    array.push(i);
  }
  console.log(array.join(""));
}

function isFizz(number) {
  return number % 3 == 0;
}

function isBuzz(number) {
  return number % 5 == 0;
}

function isBang(number) {
  return number % 7 == 0;
}

function isBong(number) {
  return number % 11 == 0;
}

function isFezz(number) {
  return number % 13 == 0;
}

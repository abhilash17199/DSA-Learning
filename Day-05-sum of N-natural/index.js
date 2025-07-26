////// sum of n natural number

var pr = prompt(" howmany u want to add");
if (pr === null) {
  console.log("cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      var sum = 0;
      for (let i = 0; i <= n; i++) {
        sum = sum + i;
      }
      console.log(sum);
    } else {
      console.log("number should +ve or more than zero");
    }
  }
}
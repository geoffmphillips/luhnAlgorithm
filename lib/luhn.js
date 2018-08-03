function check(num) {
  var numArray = String(num).split('');
  // var total = 0;

  var total = doubler(numArray);
  // var doubled = numArray.forEach(function(x, index) {
  //   if (index % 2 === 1) {
  //     var temp = Number(x) * 2;
  //     if (temp > 9) temp = temp - 9;
  //     total += temp;
  //   } else {
  //     total += Number(x);
  //   }
  // });
  if (total % 10 === 0) return true;
  else return false;
}

function doubler(array) {
  var sum = 0;
  array.forEach(function(x, index) {
    if (index % 2 === 1) {
      var temp = Number(x) * 2;
      if (temp > 9) temp = temp - 9;
      sum += temp;
    } else {
      sum += Number(x);
    }
  });
  return sum;
}

exports.check = check;

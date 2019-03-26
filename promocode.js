let number = ['613884922']; // Your job to make it work with more numbers and to test.

let sum = 0
strNumber = number.toString();
if (strNumber.length != 9) {
  return false;
}
for (var i = 0; length = strNumber.length; i < 9, i += 1) {
  var n = strNumber.charAt(i); // Assume this is number ... Apparently is.
  sum += n * (length - i);
}
if (sum % 11 != 0) {
  return false;
}


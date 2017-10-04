function countLetters() {
  var obj = {};
  inputArray.forEach(function(e) {
    if (!(e in obj)) {
      obj[e] = 0;
    }
    obj[e] += 1;
  })
  console.log(obj);
}

var inputArray = process.argv[2].replace(/\s/g, '').split('');
countLetters();
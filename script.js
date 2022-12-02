var ddd =Math.floor (Math.random() * 1000);
var tryingCeil = Math.ceil(ddd);
console.log(ddd,tryingCeil);

var result = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans');
 

console.log(result.length);
function map(f, a) {
    var f;
    var a;
    var result = [], // Создаём новый массив
        i;
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  map(f, 5);

  var result = null;
  console.log(result);

  try {​
    console.log('Hello');
  } catch(err) {​
    console.log('Goodbye');
  }

  var x;

  if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  }

  
  function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condition2) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")
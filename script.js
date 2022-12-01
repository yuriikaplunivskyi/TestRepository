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
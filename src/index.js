module.exports = function getZerosCount(number, base) {
 
var zero = number;
  
  for (var i = 2; i <= base; i++) {
      var a = 0;
      var b = number;

      while (base % i == 0) {
      	var c = 0;
        c++;
        base = Math.floor(base/i);
      
      while (b/i > 0) { 
        a += Math.floor(b/i);
        b = Math.floor(b/i);
      }
      zero = Math.floor(Math.min(zero, a/c));
    }
  }
  return zero;
}

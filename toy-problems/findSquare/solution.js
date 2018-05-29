var isSquare = function(n){
if(n < 0) {
 return false;
}
 var possibleCommon = findLowestCommon(n)

 if(possibleCommon >= 0) {
   return true
 }
 else {
   return false;
 }

 function findLowestCommon(n) {
   var lowest = -1;
   for(var i = 0; i <= n; i++) {
     if(i * i === n) {
       lowest = i;
       break;
     }
   }
   return lowest;
 }

}

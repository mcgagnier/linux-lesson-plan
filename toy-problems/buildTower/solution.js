function towerBuilder(nFloors) {
 // build here
 var character = '*'
 var building = []
 for(var i = nFloors; i > 1; i--) {
   character += '**'
 }
 building.push(character)
 var characterArray = character.split('')
 var beginningIndex = 0;
 var lastIndex = characterArray.length - 1;
 for(var i = 1; i < nFloors; i++) {
   characterArray[beginningIndex] = ' ';
   characterArray[lastIndex] = ' ';
   beginningIndex++;
   lastIndex--;
   var newString = characterArray.join('')
   building.unshift(newString)
 }
 return building;
}

towerBuilder(3)

var user = {};
user.name = 'John';
user.surname = 'Mike';
user.surname = 'Peter';
delete user.name;
console.log(user);



var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };

function sum( obj ) {
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}
var summed = sum(fruit);
console.log(summed);
    // write your code here...

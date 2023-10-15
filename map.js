// map is easier than loop, works like loop but in one line.

const numbers = [12, 20, 30, 40, 50];
const dividedNumber = numbers.map(numbers => numbers/2);
console.log(dividedNumber); 

const friends = ['amit', 'datal', 'sumon'];
const firstLetter = friends.map(friends => friends[0]);
console.log(firstLetter);
const friendsLength = friends.map(friends => friends.length);
console.log(friendsLength);
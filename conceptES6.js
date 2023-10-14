// 1.var let const=>

const abul = 1;
// const cannot change its value;
let kabul = 2;
kabul = 4;
// let can change its value


// 2. Default perameters

function thisIsDefaultPerameters (salary , tax = 0.25 , bonus = 2000){

}
// it has the tax's DEFAULT PERAMETERS


// 3.Template string

const elementHTML = `
<div>
    <h3>Hello World!</h3>
</div>
`
// it has the ' ` ' back tik symbol for mulltiply line


// 4.Arrow function

const arrowFun = (a,b) => a + b;
const result = arrowFun(10,20);


// 5. spread

const myClosestFriends = ['Amit', 'Navid', 'Rahul', 'Shotez'];
const myFriends = [...myClosestFriends, 'Rashed', 'Rony'];
// it can copy any variables in to an Array by using ... ;

// 6. destructuring

const {amit, juwel, ...battu} = {amit: 6.1, juwel: 5.11, Navid: 5.6, Rahul: 5.7};
const [Navid, Shotez, ...borolok] = ['samsung', 'Xiaomi', 'Oppo', 'oneplus', 'poco'];


// let names = [
//     'duc',
//     'hoang',
//     'huu',
//     'bao',
//     'hung'
// ]

// for ( let i = 0; i < names.length ; i ++){
//     console.log('viet ra ten:' + names [i]);
// }

// for ( const name of names ){
//     console.log( 'viet ra tenn:' + name );
// }

let array = [1, 2, 4, 6, 8, 10];

// // bai 1.1

// let tich = array.reduce((accumulator, currentValue) => accumulator * currentValue );

// console.log(tich);

// bai 1.2

let minInNumbers = Math.min.apply(Math, array);
console.log(minInNumbers % 2 == 0);

let myArr = array.filter( minInNumbers => {return (Math.min.apply(Math, array)) % 2 == 0} );
console.log(myArr);











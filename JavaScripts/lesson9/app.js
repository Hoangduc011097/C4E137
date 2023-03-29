// const mySelf1 = {
//     fisrtName: 'Hoang',
//     lastName: 'Duc',
//     dob: '01/10/1997',
//     adress : 'tuiyen quang',
//     phoneNumber : '06056565665',
//     pet : {
//         name : 'bob',
//         age : 2,
//         kind: 'dog'
//     }
// }


// const mySelf2 = {
//     fisrtName: 'Hoang',
//     lastName: 'Duc',
//     dob: '01/10/1997',
//     adress : 'tuiyen quang',
//     phoneNumber : '06056565665'
    
    
// }
// // console.log(mySelf1);

// //lâsy ra giá trị của thuộc tính fisrtName trong myself1

// // thjay đổi giá trị thuộc tính

// mySelf1.phoneNumber = "0992323232332"

// //thêm thuộc tính cho isHandsome cho mySelf1

// mySelf1.isHandsome = true;


// //xoá thuộc tính dob trong mySelf1

// delete mySelf1.dob;


// console.log(mySelf1);


// for (let key in mySelf1){
//     console.log("đặc điểm"+ key + " có giá trị là : " +mySelf1[key]);

// }

// function chỉ có 1 đầu ra,
// khia báo function nhập và kiểm tra 1 số
// let a = 0;
// let b = 0;


// function inputNumber (label){

//     let input = NaN;
// do {
//     let input = Number(prompt("nhập vào số" + label + ": "));
   
// }while (isNaN(input));
// return input; // trả về giá trị khi gọi hàm và không thực thi các đoạn code bên dưới

// }
// // gọi function inputNumber

//  a = inputNumber("a");
//  b =  inputNumber("b");

//  console.log(a +b);


// function có tính chất hoisting : sử dụng function

// function doSomething (){
//     console.log("Do something here");

// }
// function sayHello (){
//     console.log("heloo");
// }
// function executeAfterSeconds (seconds, work){
//     console.log ("thực thi gì đó sau " + seconds + "giây");
    
//     setTimeout(work, seconds * 1000);     
// }

// executeAfterSeconds(3, sayHello);
// executeAfterSeconds(5, doSomething);


// // khai báo arrow function

// const doAnything = () => {

// }

// const doNothing = () => {
//     return "hello"
// }

// // function sum(a,b,c){

// //     return a + b +c;

// // }

// const sum = (a,b,c) => a + b + c;

// BÀI TẬP
// 1. tìm nghiệm phương trình bậc 2
// function timNghiemPtBac2 (a,b,c){
//     if (a== 0 ){
//         console.log("không phải pt bậc 2");
//         return null;
//     }

//     const delta = b ** 2 - 4 * a * c;
//     if(delta == 0){
//         const x = -b / (2 * a );
//         return[x];
//     } else if( delta > 0){
//         const x1 = ( -b + Math.sqrt(delta)) / ( 2 * a);
//         const x2 = ( -b - Math.sqrt(delta)) / ( 2 * a);
//         return[x1,x2]
//     } else{
//         return[];
//     }

// }

// let nghiem = timNghiemPtBac2(1,-3,-4);
// console.log(nghiem);

//2, kiểm tra a b c có tạo thành 3 cjanh của tam giác k

// function tamGiac ( a, b , c ){
//     if ( a > 0 && b > 0 && c > 0){
//         if ( a + b > c ){
            
//             return[true];
//         } else if ( a + c > b){
           
//             return[true];
//         } else if ( b + c > a ){
    
//             return[true];
//         } else {
           
//             return[false]
//         }

// }

// }

// let kiemTraTamGiac = tamGiac(1,1,5);
// console.log(kiemTraTamGiac);


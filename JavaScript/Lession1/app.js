// console.log("Welcom to javascript");
// console.log("Hello");
// console.log("this is test text");

// console.error("day la loi");

// console.warn("day la canh bao");

// // tên biến chỉ bắt đầu bằng "chữ cái", "_", "$"
// // biến k được đặt trùng vs tên lệnh trên Js (case,..)
// // trong đặt tên biến: có thể dùng số
// // biến sẽ phần biệt chữ hoa và chữ thường, NẾU TRÙNG SẼ BÁO LỖI
// let something1 = "a";
// let SOMETHING1 = "A";

// let name1; //khai báo biến
// name1= "giá trị mới của name"; //gán giá trị cho biến
// name1 = "hello, this is bullshit";
// // biến sẽ nhận giá trị từ trên xuống dưới để in ra màn hình
// console.log(name1); // hiển thị giá trị của biến name lên màn hình console


// let age1 = 10; //khái báo và gán giá trị

// const hello1 = "cần lao vi thiên thủ";
// //const là hằng số nên sẽ k thay đổi được giá trị như "let"

// console.log(hello1);


// // kiểu số (number)
// let age = 28;
// let weight = 61;
// let height = 171;
// let booty = 90;

// // kiểu chuỗi (string)

// let slogan = "cần lao vi thiên thủ";
// let name = "Hoàng Đức";
// let phone = "0975876056";
// let adress = "Tuyen Quang";

// //Kiểu boolean 

// let hasGirlfriend = false;
// let isHandsome = true;
// let isRich = false;

// // kiểu null (giá trị rỗng)

// let girlfriend = null;
// let money = null;

// //kiểu undefined (chưa xác định được giá trị của biến)

// let future;
// let wife;

// console.log(future);


// let a1 = 10;
// let b1 = "10";

// console.log ( a1 == b1); // toán tử so sánh đưa ra giá trị boolean True hoặc False
// // khi dùng toán tử so sánh thì các giá trị sẽ được đưa về kiểu dữ liệu number

// // a===b : so sánh giá trị và cả kiểu dữ liệu
// // không so sánh số với chũ

// // (a == b) && (b == c); "và" nếu 1 trong 2 sai đưa giá trị về false
//  //    KHI DÙNG + - CHO CHUỖI VÀ SỐ THÌ SẼ MẶC ĐỊNH ĐƯA SỐ VỀ DẠNG CHUỖI ĐỂ CỘNG CHUỖI
 

//  let x = true;
//  let y = true;
//  let z = false;

//   console.log ( x && y && z); // 
//     console.log (x && y && !z);
//     console.log ( (x &&y) || z);
//     console.log ((x && y) || !z);
    

//     let name2 = 'AAA';
//     let age2 = 20;
//     let isGood = true;

//     console.log( age + 10); //30
//     console.log( age % 3); //2
//     console.log(name2 + ' BBB'); //AAA BBB
//     console.log(!isGood); //False

//     console.log( name2 == 'aaa' && age2 >= 20); // False
//     console.log( name2 != 'aaa' && isGood); // true
//     console.log( !(age < 10) && !isGood); // false



//     let a = 10;
//     let b = 20;
//     let c = 30;
//     let d = '40';

//     // a + b c = 60
//     // a - b / c = 9.333333
//     // a - (b * c) = -590
//     // d - (a * b ) - c = -190
//     // a + b + c + d = '6040'
//     // d + a + b + c = 40102030
//     // d + a - b + c = 4020
//     // a - b + d - c = -1070
//     // d + a - b + c = 4020
//     // d - c + a - b = 0
//     // a * b + d * c = 1400

    

//     // a = 1
//     // b = '2'
//     // c = 3 
//     // d = '4'

//     // b+d = '24'
//     // a + b + c + d = ' 1234'
//     // a - b + c - d = -2
//     // a - b - c + d = '-44 '
//     // (b+d) - (a+c) = 20
//     // (a+b) - (c+d) = -22
//     // a * c + b * d = 11
//     // - b + d = '-24'
//     // -b - d = -6
//     // - (b + d )= -24  

let a = 10;
let b = 5;
console.log ( a - (b++) == 5);
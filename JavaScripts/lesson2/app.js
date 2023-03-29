// // nhập dữ liệu từ bàn phím và gán giá trị vừa nhập vào trong 1 biến
// // let input = prompt(" Hãy nhậkp vào đây để gán giá trị cho input"); // dữ liệnu nhập vào sẽ dạng string

// // let x =prompt(" nhập số x"); // muốn đổi thành số thì thêm nhân hoặc chia ( * 1, /1 dể biến chuỗi thành số)
// // //hoặc let x = Number(prompt("Nhập số x"));

// // let y = prompt("nhap số y");
// // let z = x + y;
// // console.log (z);

// // console.log("bạn vừa nhập vào" + input);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let name = "Hoang Duc";

// {
//     // bên trong khốii lệnh

//     let age = 26;
//     let name = "some one";
//     {
//         let address = "tuyen quang";
//         // dùng đc age ở đây
//         // adress chỉ dùng đc ở đây

//     }

//     console.log(name);

// }
// console.log(age); // khôgn tồn tại age ở đay


// let age = prompt ("nhập vào tuổi của bạn");

//  if ( age < 18){
//     console.log("Không cho vào");
//  } else {
//     console.log("vào luôn");
//  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ? NHẬP VÀO PHÂN LOẠI CỦA HỌC SINH 1 , 2 ,3
// NẾU PHẦN LOẠI LÀ 1 -> THÌ GIỎI
// NẾU PHÂN LOẠI LÀ 2 -> THÌ KHÁ
// NẾU PHÂN LOẠI LÀ 3 -> THÌ TRUNG BÌNH

// let rank = prompt(" nhập vào rank");

// if (rank == 1 ){
//     console.log ("thì giỏi");
// } else if (rank == 2 ){
//     console.log("thì khá");
// } else if (rank == 3){
//     console.log("thì trung bình");
// } else {
//     console.log("đề nghị nhập đúng rank"); // trường hợp nếu nhập k đúng 3 rank trên hoặc k đúng kiểu dữ liệu 

// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

// let text = prompt ("nhập vào 1 chuỗi");

// if (text.length <8 ){
//     console.log("nhập ngắn quá");
// }  else if (text.length >= 8){
//     console.log(" nhập đủ r");
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// IN RA DÒNG I LOVE YOU 500 LẦN
// MỖI DÒNG CÓ ĐÁNH SỐ THỨ TỰ

// for( let i = 1; i  <= 500; i++){
//     console.log(i + " . i love you"); // thêm i vào để nối chuỗi tạo số thứ tự
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TÍNH TỔNG CÁC SỐ TỪ 1 ĐẾN 50
// let sum = 0;
// for( let i = 1; i <= 50; i++){
//     sum += i
// }
// console.log(sum);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// let num = 10;
// while( num >= 6) {
//     console.log(num);
//     num = Math.floor(Math.random() * 10);

// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// in ra dãy số từ 1 -200

// let index = 1;
// while(index <=200){
//     console.log(index);
//     index++;

// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let s = prompt("chuỗi Text");
// let l = prompt("số l");

// while(s.length < 1 ){
//     s += "a";

// }
// console.log(s);
 

let x = prompt(" nhập số x");
let y = prompt(" nhập số y");
if (
    x >= 0
    && x < y
    && y <= 100
){
while(x <y){
    x++;
    y--;

}
console.log(x, y);}

else {
    console.log( ' nhập sai giá trị');

}
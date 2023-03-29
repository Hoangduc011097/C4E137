// IN RA DÃY SÔ TỪ 1 ĐÉN 500

// for ( let i = 1; i <= 500; i++){
//     console.log(i)
// }

// IN RA CÁC SỐ CHIA HẾT CHO 2 VÀ 3 TỪ 1 ĐẾN 300

// for ( let j = 1; j <= 300; j++){
//     if ( j % 2 == 0){
//         console.log(j);
//     }
//     else if ( j % 3 == 0){
//         console.log(j);
//     }
// }

//  TÍNH TỔNG CÁC SỐ CHẴN TRONG ĐẠON [-30,50]
// let sum = 0;

// for ( let a = -30; a <= 50; a++){

//     if ( a % 2 == 0 ){
//         sum +=a
//     }

// }
// console.log(sum);

// NHẬP n VÀ IN RA GIAI THỪA CỦA n

// let input = Number(prompt('nhập số n'));
// let giaithua = 1;
// for ( let n = input ; n >= 1  ; n--){

    
// giaithua *=n;//giaithua = giaithua * n

// }
// console.log(giaithua);



// NHẬP VÀO 3 SỐ A,B,X (A<B). TÌM TRONG KHOẢNG A,B SỐ NHỎ NHẤT MÀ CHIA HẾT CHO X

// let a = Number(prompt("nhập số a: "));
// let b = Number(prompt("nhập số b: "));
// let x = Number(prompt("nhập số x: "));

// let res = NaN;


// // for ( let i = a ; i <= b ; i++){
// //     if( i % x == 0 ){
// //        res = i ;
// //        break;

// //     }
// // }


// let count = a;
// while( count <= b && res % x != 0){
//     if (count % x == 0) res = count;
//     count++;
// }

// console.log(res);



//
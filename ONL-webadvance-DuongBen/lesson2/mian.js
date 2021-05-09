// 1 Các kiểu dữ liệu
//     - Number : 1,2,3
//     - String : "", ''
//     - Boolean: true, false

// 2 Các phép tính :
//     - + : cộng
//     - - : trừ
//     - * : nhân
//     - / : chia
//     - % : chia lấy dư

// 3 Khai báo biến (variable)
//     - let
//     - var
//     - const : Không thể thay đổi
//         Ví dụ:

//             let a = "hello"
//                 a = "bye bye" => a lưu giá trị là "bye bye"

//             const b = 3.14
//                 b = 15 => báo lỗi

// 4 Điều kiện
//     - if : nếu đúng thì chạy
//     - else : nếu mà if không đúng

// ------------------------- Lesson2 -------------------------------

// HomeWork
// Câu 1: a: 50 - 100 | b : 0 - 50
// Math.random() * (max - min) + min;
// let a = Math.floor(Math.random() * 50 + 50)
// let b = Math.floor(Math.random() * 50 + 0)

// let answer = prompt(`${a} - ${b} = ?`)
// if(answer == (a-b)){
//     alert("chinh xac")
// }else{
//     alert("saiiii :(")
// }

// Câu 2: tính diện tích hình tròn

// let r = prompt("nhap chu vi hinh tron")
// alert(`Dien tich hinh tron la : ${r*r*3.14}`)

// Câu 3:
// let age = prompt("nhập tuổi của bạn")
// if(age > 20){
//     alert("gia qua")
// }else if(age < 20){
//     alert("nho qua")
// }else{
//     alert("ban binh thg")
// }

// switch case

// lesson 2 : loop

// 1 for

// for(let i=0; i<=10; i=i+2){
//     console.log(i);
// }

// in ra cac so chan tu 46 - 54

// for(let i = 46 ; i<=54 ; i=i+2){
//     console.log(i);
// }

//in ra các số lẻ từ 46 - 54
// for(let i = 46 ; i<=54 ; i++){
//    if(i%2 != 0){
//        console.log(i);
//    }
// }

//  5 == 6 => false
//  5 !=6 => true

//2 while
// let i = 0
// while(i<50){
//     console.log(i);
//     i++
// }
let score = 0

let cf = true
while(cf){
    quizz()
    cf = confirm("bạn có muốn chơi tiếp k")
    
}

// for (let i = 0; i < 5; i++) {
//     quizz()
//     
// }



function quizz(){
    

    let a = Math.floor(Math.random() * 50 + 50);
    let b = Math.floor(Math.random() * 50 + 0);
  
    let answer = prompt(`${a} - ${b} = ?`);
    if (answer == a - b) {
      alert("chinh xac");
      score++
    //   score = score + 1
    //   score += 1
    } else {
      alert("saiiii :(");
    }  

    alert(`Diem cua ban la: ${score}`)
}



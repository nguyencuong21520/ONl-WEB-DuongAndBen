// // let arr = ["Ben", "Duong","Bon", "nghe"]

// let Ben = {
//   name: "Ben",
//   age: 8,
//   height: "1m25",
// };

// let Duong = {
//   name: "Duong",
//   age: 12,
//   height: "1m58",
// };

// let Bon = {
//   name: "Bon",
//   age: 15,
//   height: "1m68",
// };

// let Nghe = {
//   name: "Nghe",
//   age: 15,
//   height: "2m68",
// };

// // let students = [Ben,Duong,Bon,Nghe]

// let students = [
//     {
//         name: "Cuong",
//         age:10,
//         height: "1m85"
//     },{
//         name: "Duong",
//         age:10,
//         height: "1m55"
//     },{
//         name: "ben",
//         age:6,
//         height: "1m25"
//     }
// ]

let data = [
  {
    name: "xoai",
    url:
      "https://media.mercola.com/assets/images/foodfacts/mango-nutrition-facts.jpg",
  },
  {
    name: "thom",
    url:
      "https://antioxidant-fruits.com/wp-content/uploads/2015/10/Fresh-Golden-Pineapple.jpg",
  },
  {
    name: "dua",
    url:
      "https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/coconut-white-balsamic-condimento.jpg?1515168579",
  },
  {
    name: "dua hau",
    url:
      "https://lh3.googleusercontent.com/proxy/l9-Xxf_vI63hAZZFHE54yuBHOgAodKwBYUI7CKY0QLcaJkW3BmaUwjYdhZooPRLufN7pAB7CnbyN6ppJxP9KB_H0iytyrBvxkMbv3qIG4xv2PueMiN_pxLQrU208vDE",
  },
  {
    name: "du du",
    url:
      "https://c.ndtvimg.com/2019-06/qlo3s8ko_papaya-seeds_625x300_06_June_19.jpg",
  },
  {
    name: "vai thieu",
    url: "https://i5.walmartimages.ca/images/Enlarge/524/207/6000200524207.jpg",
  },
  {
    name: "Cam",
    url:
      "https://th.bing.com/th/id/OIP.PKHYlstDYAp3lswvX1o0aAHaE8?w=224&h=180&c=7&o=5&dpr=3&pid=1.7",
  },
  {
    name: "Kiwi",
    url:
      "https://th.bing.com/th/id/OIP.Lmvdlq0GJuGUdz1ylkyCCAHaD3?w=322&h=180&c=7&o=5&dpr=3&pid=1.7",
  },
  {
    name: "MíT",
    url:
      "https://th.bing.com/th/id/OIP.wlkNLGO2aweRe61m7uVNLQHaE8?w=296&h=197&c=7&o=5&dpr=3&pid=1.7",
  },
  {
    name: "ổi",
    url:
      "https://th.bing.com/th/id/OIP.Hj4GOzt-TJIkJw-s0HEHygHaFj?w=230&h=180&c=7&o=5&dpr=3&pid=1.7",
  },
  {
    name: "Chuối",
    url:
      "https://th.bing.com/th/id/R589c6beca423dbc5f47de0a7cb605e7f?rik=sHyfydrZfxAROA&pid=ImgRaw",
  },
  {
    name: "Quýt",
    url:
      "https://www.theepochtimes.com/assets/uploads/2015/02/15/shutterstock_95061862.jpg",
  },
];

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let image = document.getElementById("img")
let namee = document.getElementById("name")

btn.addEventListener('click',()=>{
    let inputValue = input.value.toLowerCase()

    console.log(inputValue);
    
    for(let i =0; i<data.length;i++){
        if(inputValue == data[i].name.toLowerCase()){
            image.src = data[i].url
            namee.innerText = data[i].name
            break
        }else{
            image.src = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
            namee.innerText = 'Not Found'
        }
    }
})





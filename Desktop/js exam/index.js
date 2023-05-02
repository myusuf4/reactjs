// js exam

//1
//     function findCountry(str){
//     let res=str.split(" ")
//     let ress={};
//     ress.country=res[0];
//     ress.region=res[1];
//     ress.city=res[2];
//     ress.number=res [3];
// return ress;
// }
// console.log(findCountry("+998 33 576 2020"));






//4//to'liq emas

// function sortByAlphabet(str){
//     let res=str.split("");
//     let ress=[];
// }
// console.log(sortByAlphabet("webbrain"));











//3

// let coordinate = {
//     c1: [3, 2, 4], //  [9+4+16]= (29) = 5.1
//     c2: [1, 2, 2], // [1,4,4] = (9) = 3
//     c3: [7, 4, 1], // [49,16,1] = (66) = 8.4
//     c4: [2, 2, 2], // [4,4,4] = (12) = 3.3
//   };
//   //   res (5.1 + 3 + 8.4 + 3.3)/4


//   function findArif(c){
//       let str=[];
//     for(let i in c){
//         let res=c[i];
//         let v=[]
//         for(let j=0;j<res.length;j++ ){
//             v[j]=res[j]**2;
//         }
//       n=Number(Math.sqrt(eval(v.join("+"))).toFixed(3));
//         str.push(n)
//     }
//     let m=Math.sqrt(eval(str.join("+")))
//     return m
//   }
//   console.log(Number(findArif(coordinate).toFixed(3)));













//2 


    // let s = [2, 3, 5]; // (4 + 9 + 25) // 38
    // let coordinate = {
    //   c1: [3, 2, 4], // [1,1,1] = (1+1+1) = 3
    //   c2: [1, 2, 2], // [1,1,2] = (1+1+4) = 6
    //   c3: [7, 4, 1], // [5,2,3] = (25+4+9) = 38
    //   c4: [2, 2, 2], // [0,1,3] = (0, 1, 9) = 10
    // };
  
    // const calclulate = (coordinate, s) => {

    //     let str=[];
    //     // coordinate.c1=[Math.abs(s[0]-c1[0]),Math.abs(s[0]-c1[0])]
    // for(i in coordinate){
    //     let b=[]
    //     let v=coordinate[i];
    //     v=[Math.abs(s[0]-v[0])
    //         ,Math.abs(s[1]-v[1])
    //         ,Math.abs(s[2]-v[2])
    // ]
    // res=v    

    // for(let j=0;j<res.length;j++ ){
    //         b[j]=res[j]**2;
    //     }
    //     n=Number(eval(b.join("+")));
    //             str.push(n)
    //         }
    //         let m=(eval(str.join("+")))
    //         return m
    //     };  
    //    console.log( calclulate(coordinate,s));
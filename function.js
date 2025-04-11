// // // // //returning with arrow function
// // // // let addTwonumbers=(x,y)=>x+y;
// // // // let  result=addTwonumbers(12,16);
// // // // console.log(result);
// // // // variable scope in functions
// // // //you can use variable before declaration but not in let and constant
// // // // function testAvailability(x){
// // // // }
// // // // testAvailability("hi !");
// // // // console.log("not available here",x);
// // // // function testAvailability(){
// // // //     let y="local variable";
// // // //     console.log("available here",y);
// // // // }
// // // // testAvailability();
// // // // console.log("not available here",y);
// // // function doingstuff(){
// // //     if(true){
// // //         var x="local";
// // //     }
// // //     console.log(x)
// // // }
// // // doingstuff();
// // function doingstuff(){
// //     if(true){
// //         let x="local";
// //     }
// //     console.log(x)
// // }
// // doingstuff();
// // global function 
// let GlobalVar="accessible everywhere";
// console.log("outside the scope of function",GlobalVar);
// function GlobalVarScope(x){
//     console("inside the function"GlobalVar)
// }

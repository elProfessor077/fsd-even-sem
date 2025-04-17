// // // // // // // // // // // // // //returning with arrow function
// // // // // // // // // // // // // let addTwonumbers=(x,y)=>x+y;
// // // // // // // // // // // // // let  result=addTwonumbers(12,16);
// // // // // // // // // // // // // console.log(result);
// // // // // // // // // // // // // variable scope in functions
// // // // // // // // // // // // //you can use variable before declaration but not in let and constant
// // // // // // // // // // // // // function testAvailability(x){
// // // // // // // // // // // // // }
// // // // // // // // // // // // // testAvailability("hi !");
// // // // // // // // // // // // // console.log("not available here",x);
// // // // // // // // // // // // // function testAvailability(){
// // // // // // // // // // // // //     let y="local variable";
// // // // // // // // // // // // //     console.log("available here",y);
// // // // // // // // // // // // // }
// // // // // // // // // // // // // testAvailability();
// // // // // // // // // // // // // console.log("not available here",y);
// // // // // // // // // // // // function doingstuff(){
// // // // // // // // // // // //     if(true){
// // // // // // // // // // // //         var x="local";
// // // // // // // // // // // //     }
// // // // // // // // // // // //     console.log(x)
// // // // // // // // // // // // }
// // // // // // // // // // // // doingstuff();
// // // // // // // // // // // function doingstuff(){
// // // // // // // // // // //     if(true){
// // // // // // // // // // //         let x="local";
// // // // // // // // // // //     }
// // // // // // // // // // //     console.log(x)
// // // // // // // // // // // }
// // // // // // // // // // // doingstuff();
// // // // // // // // // // // global function 
// // // // // // // // // // let GlobalVar="accessible everywhere";
// // // // // // // // // // console.log("outside the scope of function",GlobalVar);
// // // // // // // // // // function GlobalVarScope(x){
// // // // // // // // // //     console("inside the function"GlobalVar)
// // // // // // // // // // }
// // // // // // // // // //immediately invoked function expression
// // // // // // // // // (function{
// // // // // // // // //     console.log("IIFE");
// // // // // // // // // })();
// // // // // // // // (()=>{
// // // // // // // //  console.log("run") 
// // // // // // // // })();
// // // // // // // //Recursive functions
// // // // // // // // function getRecursive(nr){
// // // // // // // //     console.log(nr);
// // // // // // // //     getRecursive(--nr);
// // // // // // // // }
// // // // // // // // getRecursive(3);//infinite recusrsion
// // // // // // // function getRecursive(nr){
// // // // // // //     console.log(nr);
// // // // // // //     if(nr>0){
// // // // // // //     getRecursive(--nr);
// // // // // // //     }
// // // // // // // }
// // // // // // // getRecursive(3);
// // // // // // function logRecursive(nr){
// // // // // //     console.log("started function",nr);
// // // // // //     if(nr>0){
// // // // // //         logRecursive(nr-1);
// // // // // //     }else{
// // // // // //         console.log("done with recursion");
// // // // // //     }
// // // // // //     console.log("ended function",nr)
// // // // // // }
// // // // // // logRecursive(3);
// // // // // //the performance of recursion is worse as compared to iteration due to bottleneck and memory management.
// // // // // //Nested Functions
// // // // // function doOuterFunction(nr){
// // // // //     console.log("outer function");
// // // // //     doInnerFuction(x){
// // // // //         console.log(x+7);
// // // // //     }

// // // // // }
// // // // //Anonymous Functions
// // // // //Function Callbacks
// // // // let functionVariable=function(){
// // // //     console.log("not so secret");
// // // // }
// // // // function doFlexibleStuff(executestuff){
// // // //     executestuff();
// // // //     console.log("inside doFlexibleStuff");
// // // // }
// // // // doFlexibleStuff(functionVariable);
// // // //setTimeout in milisecond
// // // let youGotThis=function(){
// // //     console.log("you are doing really well");
// // // }
// // // setTimeout(youGotThis,70000);
// // //setInterval
// // let youGotThis=function(){
// //         console.log("you are doing really well");
// //     }
// //  setInterval(youGotThis,70000);
// (function(){
//     console.log("welcome");
// })();
// let result=(function(){
//     let firstname
// })   

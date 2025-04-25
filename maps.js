// // // // // // // // // // // // // // // // // // // maps hold key value pair and key is of any datatype
// // // // // // // // // // // // // // // // // // // map is a predefined classs
// // // // // // // // // // // // // // // // // // // here fruits is object of the map class
// // // // // // // // // // // // // // // // // // const fruits = new Map([  
// // // // // // // // // // // // // // // // // //     ["apples",500],
// // // // // // // // // // // // // // // // // //     ["bananas",300],
// // // // // // // // // // // // // // // // // //     ["oranges",200]
// // // // // // // // // // // // // // // // // // ]);

// // // // // // // // // // // // // // // // // // // set(): you can add element to the Map() with set method & also change the existing Map value(Reinitialise the value)

// // // // // // // // // // // // // // // // // // //fruits.set("apples",600);
// // // // // // // // // // // // // // // // // // // fruits.set("bananna",300);
// // // // // // // // // // // // // // // // // // // fruits.set("oranges",200);
// // // // // // // // // // // // // // // // // // //console.log(fruits);
// // // // // // // // // // // // // // // // // // // console.log(fruits.get("apples"));
// // // // // // // // // // // // // // // // // // // console.log(fruits.size);
// // // // // // // // // // // // // // // // // // // console.log(fruits.delete("apples"));
// // // // // // // // // // // // // // // // // // // console.log(fruits);
// // // // // // // // // // // // // // // // // // //console.log(fruits.clear);
// // // // // // // // // // // // // // // // // // //console.log(fruits.has("apples"));


// // // // // // // // // // // // // // // // // // //typeof : used because it is loosely coupled language
// // // // // // // // // // // // // // // // // // //Object:Not directly iterable,keys must be string,dont have size property
// // // // // // // // // // // // // // // // // // //Map: directly iterable,keys can be any datatype,have size property

// // // // // // // // // // // // // // // // // // let text = "";
// // // // // // // // // // // // // // // // // // fruits.forEach(function(value,key)){
// // // // // // // // // // // // // // // // // //   text+=key+'='+value;  
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // let text ="";
// // // // // // // // // // // // // // // // // for(const x of fruits.entries()){
// // // // // // // // // // // // // // // // //     text+=x;
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // console.log(text);
// // // // // // // // // // // // // // // // const apples={Name:'Apples'};
// // // // // // // // // // // // // // // // const fruits=new Map();
// // // // // // // // // // // // // // // // console.log(fruits.set(apples,500));
// // // // // // // // // // // // // // // const fruits=[
// // // // // // // // // // // // // // //     {Name:"apples",quantity:300},
// // // // // // // // // // // // // // //     {Name:"banana",quantity:200};
// // // // // // // // // // // // // // // ]
// // // // // // // // // // // // // // // function myCallback({quantity}){
// // // // // // // // // // // // // // //     return quantity>200?"ok":"low";
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // const result=Map.groupBy(fruits,myCallback);
// // // // // // // // // // // // // // // console.log(result)
// // // // // // // // // // // // // // //Destructuring in JavaScript
// // // // // // // // // // // // // // const person={
// // // // // // // // // // // // // //     firstName:"John";
// // // // // // // // // // // // // //     lastName:"doe";
// // // // // // // // // // // // // //     age:50;
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // let{firstName,lastName}=person;
// // // // // // // // // // // // // // console.log();
// // // // // // // // // // // // // //Destructuring is not destructive.
// // // // // // // // // // // // // //Object property alias
// // // // // // // // // // // // //      firstName:"John";
// // // // // // // // // // // // //      lastName:"doe";
// // // // // // // // // // // // //      age:50;
// // // // // // // // // // // // //String destructuring
// // // // // // // // // // // // let Name="gurukulschools";
// // // // // // // // // // // // let[a1,a2,a3,a4,a5]=Name;
// // // // // // // // // // // // console.log(a1);
// // // // // // // // // // // const=["bananas","apples","oranges","mangoes"];
// // // // // // // // // // // let[fruits1,fruits2]=fruits;
// // // // // // // // // // // console.log("fruits1");
// // // // // // // // // // const fruits=["bananas","apples","oranges","mangoes"];
// // // // // // // // // // let[fruit1,,,,fruit2]=fruits;
// // // // // // // // // // console.log(fruit1);
// // // // // // // // // const fruits=["bananas","apples","oranges","mangoes"];
// // // // // // // // // let {{0}:fruit1,{1}:fruit2}=fruits;
// // // // // // // // // console.log(0);
// // // // // // // // const numbers=[10,20,30,40,50,60,70];
// // // // // // // // const [a,b,...rest]=numbers;
// // // // // // // // console.log(a);
// // // // // // // const fruits=new Map({
// // // // // // //     ["apples",500],
// // // // // // //     ["bana"]
// // // // // // // })
// // // // // // const fruits = new Map([  
// // // // // //         ["apples",500],
// // // // // //         ["bananas",300],
// // // // // //         ["oranges",200]
// // // // // //     ]);
// // // // // //     let text = "";
// // // // // // for(const(value,key)){
// // // // // //   text+=key+'='+value;  
// // // // // // }
// // // // // let fistName="John";
// // // // // let lastName="Doe";
// // // // let x=5;
// // // // x**=2;
// // // // console.log(x);
// // // //JS array includes()
// // // const fruits=["bananas","apples","oranges","mangoes"];
// // // console.log(("banana",3));
// // //the includes() is case sensititve.
// // //trailing comma
// // //the trailing have been legal in array literals.
// // const arr=[
// //     "one",
// //     "two",
// //     "three",,
// // ];
// // console.log(arr.length);
// const person={
//     firstName:"john",
//     ,
//     age:30,
// }
// console.log(person);
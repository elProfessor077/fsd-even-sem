// // // // // // // // // // // //classes and objects
// // // // // // // // // // // class ClassName{
// // // // // // // // // // //     constructor(prop1,prop2){
// // // // // // // // // // //         this.prop1=prop1;
// // // // // // // // // // //         this.prop2=prop2;

// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // // let obj= new ClassName("arg1","arg2");
// // // // // // // // // // // console.log(obj.prop1);
// // // // // // // // // // // console.log(obj.prop2);
// // // // // // // // // // // //this() keyword refres to the objects it belong to so it is the first property instance.
// // // // // // // // // // clas Dog{
// // // // // // // // // //     constructor(doganme,weight,color,breed){
// // // // // // // // // //         this.dogName=dogName;
// // // // // // // // // //         this.weight=weight;
// // // // // // // // // //         this.color=color;
// // // // // // // // // //         this.breed=breed;

// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // // // let dog=new Dog("Javascript",2.4,"brown","chihuahua") 
// // // // // // // // // // console.log(dog.dogName);
// // // // // // // // // //there is only one constructor in the class.
// // // // // // // // // //class name should be start with capital letter.
// // // // // // // // // ;
// // // // // // // // //     }
// // // // // // // // // }
// // // // // // // // // let p=new Person("Parth","Dwivedi");
// // // // // // // // // console.log("hi",p.firstName);
// // // // // // // // //METHODS:when defining these methods we dont use the function keywords,we directly start with new.
// // // // // // // // class Person{
// // // // // // //     //     constructor(firstname,lastname){
// // // // // // //     //         this.firstname=firstname;
// // // // // // //     //         this.lastname=lastname;
// // // // // // //     //     }
// // // // // // //     // }
    
// // // // // // //     // let p=new Person("Maaike","van Putten");
// // // // // // //     // console.log("hi",p.firstname);
    
// // // // // // //     // METHODS:when defining these methods we dont use the function keyword.we start diectly with the name.(Function on a class)
    
// // // // // // //     // class Person{
// // // // // // //     //     constructor(firstname,lastname){
// // // // // // //     //         this.firstname=firstname;
// // // // // // //     //         this.lastname=lastname;
// // // // // // //     //     }
// // // // // // //     //     greet(){
// // // // // // //     //         console.log("Hi there! I'm",this.firstname);
// // // // // // //     //     }
// // // // // // //     //     compliment(name,object){
// // // // // // //     //         return "That's a wonderful " + object + "," + name;
// // // // // // //     //     }
// // // // // // //     // }
// // // // // // //     // let p=new Person("Maaike","van Putten");
// // // // // // //     // p.greet();
// // // // // // //     // let compliment=p.compliment("harry","hat");
// // // // // // //     // console.log(compliment);
// // // // // // // //Properties
// // // // // // // class Person{
// // // // // // //     #firstname
// // // // // // //     #lastname;
// // // // // // //     constructor(firstname,lastname){
// // // // // // //         this.#firstname=firstname;
// // // // // // //         this.#lastname=lastname;
// // // // // // //     }
// // // // // // // }
// // // // // // // )let p=new Person("maria"
// // // // // // // console.log(p.firstname);
// // // // // // constructor(firstname,lastname){
// // // // // //     if(firstname.startsWith("M")){
// // // // // //         this.#firstname=firstname;
// // // // // //     }
// // // // // //     else{
// // // // // //         this.#firstname=lastname;
// // // // // //     }   
// // // // // //     }
// // // // // //     let p=new Person("maria");
// // // // // // }
// // // // // class Person{
// // // // //         #firstname
// // // // //         #lastname;
// // // // //         constructor(firstname,lastname){
// // // // //             this.#firstname=firstname;
// // // // //             this.#lastname=lastname;
// // // // //         }
// // // // //         get firstname(){
// // // // //             return this.#firstname;
// // // // //         }
// // // // //         set firstname(firstname){
// // // // //             this.#firstname=firstname;
// // // // //         }
// // // // //         let p=new Person("maria")
// // // // //         console.log(p.firstname);
// // // // //inheritence
// // // // class Vehicle{
// // // //     constructor(color,currentSpeed,maxSpeed){
// // // //         this.color=color;
// // // //         this.currentSpeed=currentSpeed;
// // // //         this.maxSpeed=maxSpeed;
// // // //     }
// // // //     move(){
// // // //         console.log("moving",this.currentSpeed);
// // // //     }
// // // // }
// // // // class Motorcycle extends Vehicle{
// // // //     constructor(color,currentSpeed,maxSpeed,fuel){
// // // //         super(color,currentSpeed,maxSpeed);
// // // //         this.fuel=fuel;
// // // //     }
// // // //     dowheelie(){
// // // //         console.log("driving on one wheel")
// // // //     }
// // // // }a
// // // // let motor=new Motorcycle("black",0,120,"gasoline")
// // // // console.log(motor.color;)
// // // class Vehicle{
// // //         constructor(color,currentSpeed,maxSpeed){
// // //             this.color=color;
// // //             this.currentSpeed=currentSpeed;
// // //             this.maxSpeed=maxSpeed;
// // //         }
// // //         move(){
// // //             console.log("moving",this.currentSpeed);
// // //         }
// // //     }
// // //     class Motorcycle extends Vehicle{
// // //         constructor(color,currentSpeed,maxSpeed,fuel){
// // //             super(color,currentSpeed,maxSpeed);
// // //             this.fuel=fuel;
// // //         }
// // //         dowheelie(){
// // //             console.log("driving on one wheel")
// // //         }
// // //     }
// // //     let motor=new Motorcycle("black",0,120,"gasoline")
// // //     console.log(motor.color);
// // //     //we cannot access any motorcycle specific properties or methods in vehicle class.
// // //prototypes
// // class Person{
// //     constructor(firstname,lastname){
// //         this.firstname=firstname;
// //         this.lastname=lastname;
// //     }
// //     greet(){
// //         console.log("Hi there!");
// //     }
// // }
// // Person.prototype.introduce = function(){
// //     console.log("Hi,I'm",This.firstname);
// // };
// // Person.prototype.favColor="green";
// // let p=new Person("maria","Saga");
// // console.log(p.favColor);
// // p.introduce();
// class Person{
//         constructor(firstname,lastname){
//             this.firstname=firstname;
//             this.lastname=lastname;
//         }
//         greet(){
//             console.log("Hi there!");
//         }
//     }
//     Person.prototype.introduce = function(){
//         console.log("Hi,I'm",this.firstname);
//     };
//     Person.prototype.favColor="green";
//     let p=new Person("maria","Saga");
//     console.log(p.favColor);
//     p.introduce();//method invoking.
//     //this is possible only method of class

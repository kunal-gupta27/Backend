// const st1 = {
//     name : "adam",
//     age: 25,
//     marks: 95,
//     getMarks: function(){
//         return this.marks;
//     },
// };

// const st2 = {
//     name : "aman",
//     age: 26,
//     marks: 96,
//     getMarks: function(){
//         return this.marks;
//     },
// };

// const st3 = {
//     name : "even",
//     age: 23,
//     marks: 94,
//     getMarks: function(){
//         return this.marks;
//     },
// };

//Note:
// we our creating different object , in this 
//obj have some attribute so each obj have diff. attribute and function
//so iski efficineny kai liye hum object oriented programming ka use krte hain

//*********************learning object prototype********************** */


// let arr = [1, 2, 3];
// arr.sayHello = () => {
//     console.log("hello!, i am arr");
    
// }


//****************Factory Function***************** */


// Approach 1st

// function personMaker(name, age) {
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`hi, my name is ${this.name}`);
            
//         },
//     };
//     return person;
// }
 
// let p1 = personMaker("adam", 25) //copy
// let p2 = personMaker("even", 23) //copy



//Approach 2nd
//constructor -> doesnt return anything and starting with capital letter

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
       
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`);
    
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("ada", 23   );


//*************Inheritance******************** */
class Person{
    constructor(name, age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi, I am ${this.name}`);  
    }
}
class Student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor");
        
        super(name,age); // parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);  // parent class constructor is being called
        this.subject = subject;
    }
}
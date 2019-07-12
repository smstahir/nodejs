// function exporting
// const person={
//     name:'shah',
//     age:26
// }
// module.exports=person;

/**
 * class exporting
 */
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    greeting(){
        console.log('hello ' + this.name+' You are now ' + this.age +' years old');
    }
}

module.exports=Person;
class Person{
    constructor(name,email){
        this.name = name;
        this.email = email
    }
    // get name(){
    //     return this.name
    // }
    // set name(name){
    //     this.name = name
    // }

    print(){
        console.log(`Name : ${this.name}, Email : ${this.email}`);
    }

}

export default Person;
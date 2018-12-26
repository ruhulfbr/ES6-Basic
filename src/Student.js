import Person from './Person'
class Student extends Person{
    constructor(name,email,id){
        super(name,email)
        this.id = id
    }

    info(){
        super.print();
        console.log(`ID: ${this.id}`);
    }
}
export default Student;
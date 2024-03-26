export class CreateUserDto {
    lastName:string
    firstName:string
    id:number
    age:number
    constructor(lastName,firstName,age,id){
        this.age=age;
        this.firstName=firstName;
        this.id=id;
        this.lastName=lastName;
    }
}

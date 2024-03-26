import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    constructor(lastName,firstName,age){
        super();
        this.lastName=lastName;
        this.age=age;
        this.firstName=firstName;
    }
}

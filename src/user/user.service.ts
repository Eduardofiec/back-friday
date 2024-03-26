import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {AppDataSource} from '../../../src/data-source'
import {User} from '../../../src/entity/User'


@Injectable()
export class UserService {
  repo=AppDataSource.getRepository(User)

  async create(createUserDto: CreateUserDto) {
    let create=createUserDto;
    return await this.repo.save(create)
  }

  async findAll() {
    return await this.repo.find().catch(()=>{Logger.log('Deu erro ')});
  }

  async findOne(id: number) {
      return await this.repo.findBy({
        id:id
      });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let update=updateUserDto;
    update.id=id;
    return await this.repo.save(update);
    
  }

  async remove(id: number) {
    let remove=await this.repo.findOneBy({
      id:id
    });
    this.repo.remove(remove)
  }
}

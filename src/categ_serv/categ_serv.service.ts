import { Injectable } from '@nestjs/common';
import { CreateCategServDto } from './dto/create-categ_serv.dto';
import { UpdateCategServDto } from './dto/update-categ_serv.dto';
import {AppDataSource} from '../../../src/data-source'


@Injectable()
export class CategServService {
  create(createCategServDto: CreateCategServDto) {
    return 'This action adds a new categServ';
  }

  findAll() {
    return `This action returns all categServ`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categServ`;
  }

  update(id: number, updateCategServDto: UpdateCategServDto) {
    return `This action updates a #${id} categServ`;
  }

  remove(id: number) {
    return `This action removes a #${id} categServ`;
  }
}

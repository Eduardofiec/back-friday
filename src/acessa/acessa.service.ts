import { Injectable } from '@nestjs/common';
import { CreateAcessaDto } from './dto/create-acessa.dto';
import { UpdateAcessaDto } from './dto/update-acessa.dto';

@Injectable()
export class AcessaService {
  create(createAcessaDto: CreateAcessaDto) {
    return 'This action adds a new acessa';
  }

  findAll() {
    return `This action returns all acessa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acessa`;
  }

  update(id: number, updateAcessaDto: UpdateAcessaDto) {
    return `This action updates a #${id} acessa`;
  }

  remove(id: number) {
    return `This action removes a #${id} acessa`;
  }
}

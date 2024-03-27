import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../database/data-source';
import { acessa } from '../database/entity/acessa';
import { CreateAcessaDto } from './dto/create-acessa.dto';
import { UpdateAcessaDto } from './dto/update-acessa.dto';

@Injectable()
export class AcessaService {
  repo=AppDataSource.getRepository(acessa)
  async create(createAcessaDto: CreateAcessaDto) {
    let create = createAcessaDto;
    return await this.repo.save(create);
  }

  async findAll() {
    return await this.repo.find()
  }

  async findOne(id: number) {
    return await this.repo.findBy({
      id_acessa:id
    });
  }

  async update(id: number, updateAcessaDto: UpdateAcessaDto) {
    let update=updateAcessaDto;
    update.id_acessa=id;
    return this.repo.save(update)
  }

  async remove(id: number) {
    let remove = await this.repo.findOneBy({
      id_acessa:id
    })
    return await this.repo.remove(remove);
  }
}

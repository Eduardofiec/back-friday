import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { AppDataSource } from '../database/data-source';
import { endereco } from '../database/entity/endereco';

@Injectable()
export class EnderecoService {
  repo=AppDataSource.getRepository(endereco)
  async create(createEnderecoDto: CreateEnderecoDto) {
    let create = createEnderecoDto;
    return await this.repo.save(create);
  }

  async findAll() {
    return await this.repo.find()
  }

  async findOne(id: number) {
    return  await this.repo.findBy({
      id_endereco:id
    })
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    let update=updateEnderecoDto;
    update.id_endereco=id;
    return this.repo.save(update)
  }

  async remove(id: number) {
    let remove = await this.repo.findOneBy({
      id_endereco:id
    })
    return this.repo.remove(remove);
  }
}

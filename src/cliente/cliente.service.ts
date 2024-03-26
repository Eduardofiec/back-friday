import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../../../src/data-source';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { cliente } from '../../../src/entity/cliente';


@Injectable()
export class ClienteService {
  repo= AppDataSource.getRepository(cliente);
  async create(createClienteDto: CreateClienteDto) {
    let create = createClienteDto;
    return await this.repo.save(create);
  }

  async findAll() {
    return await this.repo.find()
  }

  async findOne(id: number) {
    return await this.repo.findBy({
      id_cliente:id
    });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    let update=updateClienteDto
    update.id_cliente=id;
    return await this.repo.save(update)
  }

  async remove(id: number) {
    let remove = await this.repo.findOneBy({
      id_cliente:id
    })
    return await this.repo.remove(remove);
  }
}

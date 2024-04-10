import { Injectable } from '@nestjs/common';
import { CreatePrestServDto } from './dto/create-prest_serv.dto';
import { UpdatePrestServDto } from './dto/update-prest_serv.dto';
import { AppDataSource } from '../database/data-source';
import { prest_serv} from '../database/entity/prest_serv';



@Injectable()
export class PrestServService {

  repo=AppDataSource.getRepository(prest_serv);

  async create(createPrestServDto: CreatePrestServDto) {
    let create=createPrestServDto;
    return await this.repo.save(create)
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findBy({
      id_prest:id
    });
  }

  async update(id: number, updatePrestServDto: UpdatePrestServDto) {
    let update=updatePrestServDto;
    update.id_prest=id;
    return await this.repo.save(update)
  }

  async remove(id: number) {
    let remove=await this.repo.findOneBy({
      id_prest:id
    });
    return this.repo.remove(remove)
  }
}

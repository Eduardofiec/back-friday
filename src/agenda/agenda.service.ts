import { Injectable } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { AppDataSource } from '../database/data-source';
import { agenda } from '../database/entity/agenda';

@Injectable()
export class AgendaService {
  repo=AppDataSource.getRepository(agenda)
  async create(createAgendaDto: CreateAgendaDto) {
    let create = createAgendaDto;
    return await this.repo.save(create);
  }

  async findAll() {
    return await this.repo.find()
  }

  async findOne(id: number) {
    return await this.repo.findBy({
      id_agenda:id
    });
  }

  async update(id: number, updateAgendaDto: UpdateAgendaDto) {
    let update=updateAgendaDto;
    update.id_agenda=id;
    return this.repo.save(update)
  }

  async remove(id: number) {
    let remove = await this.repo.findOneBy({
      id_agenda:id
    })
    return this.repo.remove(remove);
  }
}

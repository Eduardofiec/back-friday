import { PartialType } from '@nestjs/mapped-types';
import { CreateAgendaDto } from './create-agenda.dto';

export class UpdateAgendaDto extends PartialType(CreateAgendaDto) {
    constructor(id_agenda, data, hora, disponivel_s_n){
        super()
        this.id_agenda=id_agenda;
        this.data=data;
        this.hora=hora;
        this.disponivel_s_n=disponivel_s_n;
    }
}

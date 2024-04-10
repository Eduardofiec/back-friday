import { 
    IsDate
} from 'class-validator';


import { Type } from 'class-transformer';

export class CreateAgendaDto {
    id_agenda: number
    @IsDate()
    @Type(() => Date)
    data: Date
    hora: Date
    disponivel_s_n: boolean
    constructor(id_agenda, data, hora, disponivel_s_n){
        this.id_agenda=id_agenda;
        this.data=data;
        this.hora=hora;
        this.disponivel_s_n=disponivel_s_n;
    }
}

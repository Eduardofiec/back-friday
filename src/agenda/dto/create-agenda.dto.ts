export class CreateAgendaDto {
    id_agenda: number
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

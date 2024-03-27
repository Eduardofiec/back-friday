export class CreateAcessaDto {
    id_acessa: number
    data: Date
    hora: Date
    endereco_mac: boolean
    constructor(id_acessa,data,hora, endereco_mac){
        this.id_acessa=id_acessa;
        this.data=data;
        this.hora=hora;
        this.endereco_mac=endereco_mac;
    }
}

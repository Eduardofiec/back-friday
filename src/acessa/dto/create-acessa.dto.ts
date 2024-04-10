import { 
    Length, 
    IsDate,

} from 'class-validator';

import { Type } from 'class-transformer';

export class CreateAcessaDto {
    id_acessa: number
    @IsDate()
    @Type(() => Date)
    data: Date
    hora:string
    @Length(20,90)
    endereco_mac: boolean
    constructor(id_acessa,data,hora, endereco_mac){
        this.id_acessa=id_acessa;
        this.data=data;
        this.hora=hora;
        this.endereco_mac=endereco_mac;
    }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateAcessaDto } from './create-acessa.dto';

export class UpdateAcessaDto extends PartialType(CreateAcessaDto) {
    constructor(id_acessa,data,hora, endereco_mac){
        super()
        this.id_acessa=id_acessa;
        this.data=data;
        this.hora=hora;
        this.endereco_mac=endereco_mac;
    }
}

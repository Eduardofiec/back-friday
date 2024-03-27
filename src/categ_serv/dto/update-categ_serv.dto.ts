import { PartialType } from '@nestjs/mapped-types';
import { CreateCategServDto } from './create-categ_serv.dto';

export class UpdateCategServDto extends PartialType(CreateCategServDto) {
    constructor(id_serv,desc_serv,nome){
        super()
        this.id_serv=id_serv;
        this.desc_serv=desc_serv;
        this.nome=nome;
    }
}

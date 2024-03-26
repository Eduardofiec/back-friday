import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestServDto } from './create-prest_serv.dto';

export class UpdatePrestServDto extends PartialType(CreatePrestServDto) {
    constructor( senha, nome,cnpj_cpf, telefone, avaliacao){
        super()
        this.cnpj_cpf=cnpj_cpf
        this.nome=nome
        this.senha=senha
        this.telefone=telefone
        this.avaliacao=avaliacao
    }
}

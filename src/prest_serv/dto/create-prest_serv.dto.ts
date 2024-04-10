import { 
    IsEmail, 
    IsNotEmpty, 
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsFQDN,
    IsDate,
    Min,
    Max,
    Matches
} from 'class-validator';

import { IsCPF } from 'brazilian-class-validator';

import { Type } from 'class-transformer';

export class CreatePrestServDto {
    id_prest:number
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    senha:string
    @Length(4,80)
    nome:string
    /*@Matches(/[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}/,{})*/
    cnpj_cpf:string
    @Length(11,11)
    telefone:string
    @Length(1,2)
    avaliacao:number
    constructor(id_prest, senha, nome,cnpj_cpf, telefone, avaliacao){
        this.cnpj_cpf=cnpj_cpf
        this.id_prest=id_prest
        this.nome=nome
        this.senha=senha
        this.telefone=telefone
        this.avaliacao=avaliacao
    }
}

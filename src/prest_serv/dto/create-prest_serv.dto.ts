export class CreatePrestServDto {
    id_prest:number
    senha:string
    nome:string
    cnpj_cpf:string
    telefone:string
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

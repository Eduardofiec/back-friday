export class CreateClienteDto {
    id_cliente:number
    nome : string
    senha : string
    telefone : string
    email : string
    constructor(id_cliente,nome,senha,telefone,email){
        this.id_cliente = id_cliente
        this.nome = nome
        this.senha = senha
        this.telefone = telefone
        this.email = email
    }
}
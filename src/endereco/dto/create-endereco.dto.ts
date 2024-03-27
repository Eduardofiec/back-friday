export class CreateEnderecoDto {
    id_endereco: number
    cep: string
    numero: number
    cidade: string
    bairro: string
    constructor(id_endereco,cep,numero, cidade,bairro){
        this.id_endereco=id_endereco;
        this.cep=cep;
        this.numero=numero;
        this.cidade=cidade;
        this.bairro=bairro;
    } 
}

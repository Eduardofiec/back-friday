export class CreateCategServDto {
    id_serv: number
    desc_serv: string
    nome: string
    constructor(id_serv,desc_serv,nome){
        this.id_serv=id_serv;
        this.desc_serv=desc_serv;
        this.nome=nome;
    }
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class prest_serv {

    @PrimaryGeneratedColumn()
    id_prest: number

    @Column()
    cnpj_cpf: string

    @Column()
    telefone: string

    @Column()
    avaliacao: number

    @Column()
    nome: string

    @Column()
    senha: string

   
}

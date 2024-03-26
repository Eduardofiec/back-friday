import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class categ_serv {

    @PrimaryGeneratedColumn()
    id_serv: number

    @Column()
    desc_serv: string

    @Column()
    nome: string
}

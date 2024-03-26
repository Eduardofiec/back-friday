import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class cliente {

    @PrimaryGeneratedColumn()
    id_cliente: number

    @Column()
    nome: string

    @Column()
    senha: string

    @Column()
    telefone: string

    @Column()
    email: string


}

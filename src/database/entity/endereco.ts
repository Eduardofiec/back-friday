import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class endereco {

    @PrimaryGeneratedColumn()
    id_endereco: number

    @Column()
    cep: string

    @Column()
    numero: number

    @Column()
    cidade: string

    @Column()
    bairro: string

    
}

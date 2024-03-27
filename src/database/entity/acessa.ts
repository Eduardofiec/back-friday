import { Entity, PrimaryGeneratedColumn, Column, Double } from "typeorm"

@Entity()
export class acessa {

    @PrimaryGeneratedColumn()
    id_acessa: number

    @Column()
    data: Date

    @Column()
    hora: Date

    @Column()
    endereco_mac: boolean
    
}

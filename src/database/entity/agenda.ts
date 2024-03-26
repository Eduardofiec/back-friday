import { Entity, PrimaryGeneratedColumn, Column, Double } from "typeorm"

@Entity()
export class agenda {

    @PrimaryGeneratedColumn()
    id_agenda: number

    @Column()
    data: Date

    @Column()
    hora: Date

    @Column()
    disponivel_s_n: boolean



}

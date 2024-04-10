import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class post {

    @PrimaryGeneratedColumn()
    id_post: number

    @Column()
    cod_img: string

    @Column()
    curtidas: number

    @Column()
    comentarios: string

}

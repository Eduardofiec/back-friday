import { 
    Length
} from 'class-validator';

export class CreatePostDto {
    id_post: number
    cod_img: string
    curtidas: number
    @Length(1,100)
    comentarios: string
    constructor(id_post,cod_img,curtidas, comentarios){
        this.id_post=id_post;
        this.cod_img=cod_img;
        this.curtidas=curtidas;
        this.comentarios=comentarios;
    }
}

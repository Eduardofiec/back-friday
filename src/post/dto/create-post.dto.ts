export class CreatePostDto {
    id_post: number
    cod_img: string
    curtidas: string
    comentarios: string
    constructor(id_post,cod_img,curtidas, comentarios){
        this.id_post=id_post;
        this.cod_img=cod_img;
        this.curtidas=curtidas;
        this.comentarios=comentarios;
    }
}

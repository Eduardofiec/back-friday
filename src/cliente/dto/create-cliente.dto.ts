import { 
    IsEmail, 
    Length,
    Matches
} from 'class-validator';

export class CreateClienteDto {
    id_cliente:number;
    @Length(4,80)
    nome : string;
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    senha : string;
    @Length(11,11)
    telefone : string;
    @IsEmail()
    email : string;
    constructor(id_cliente,nome,senha,telefone,email){
        this.id_cliente = id_cliente
        this.nome = nome
        this.senha = senha
        this.telefone = telefone
        this.email = email
    }
}
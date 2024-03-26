import "reflect-metadata"
import { DataSource } from "typeorm"
import { acessa } from "./entity/acessa";
import { agenda } from "./entity/agenda";
import { categ_serv } from "./entity/categ_serv";
import { cliente } from "./entity/cliente";
import { endereco } from "./entity/endereco";
import { post } from "./entity/post";
import { prest_serv } from "./entity/prest_serv";



export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "teste_for",
    synchronize: true,
    logging: false,
    entities: [prest_serv, cliente],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize();
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategServDto } from './create-categ_serv.dto';

export class UpdateCategServDto extends PartialType(CreateCategServDto) {}

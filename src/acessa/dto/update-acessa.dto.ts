import { PartialType } from '@nestjs/mapped-types';
import { CreateAcessaDto } from './create-acessa.dto';

export class UpdateAcessaDto extends PartialType(CreateAcessaDto) {}

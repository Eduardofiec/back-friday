import { Module } from '@nestjs/common';
import { AcessaService } from './acessa.service';
import { AcessaController } from './acessa.controller';

@Module({
  controllers: [AcessaController],
  providers: [AcessaService],
})
export class AcessaModule {}

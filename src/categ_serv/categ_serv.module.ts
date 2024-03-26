import { Module } from '@nestjs/common';
import { CategServService } from './categ_serv.service';
import { CategServController } from './categ_serv.controller';

@Module({
  controllers: [CategServController],
  providers: [CategServService],
})
export class CategServModule {}

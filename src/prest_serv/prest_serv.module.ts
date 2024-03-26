import { Module } from '@nestjs/common';
import { PrestServService } from './prest_serv.service';
import { PrestServController } from './prest_serv.controller';

@Module({
  controllers: [PrestServController],
  providers: [PrestServService],
})
export class PrestServModule {}

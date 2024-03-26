import { Test, TestingModule } from '@nestjs/testing';
import { PrestServController } from './prest_serv.controller';
import { PrestServService } from './prest_serv.service';

describe('PrestServController', () => {
  let controller: PrestServController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestServController],
      providers: [PrestServService],
    }).compile();

    controller = module.get<PrestServController>(PrestServController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

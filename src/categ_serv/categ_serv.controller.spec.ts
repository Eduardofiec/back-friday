import { Test, TestingModule } from '@nestjs/testing';
import { CategServController } from './categ_serv.controller';
import { CategServService } from './categ_serv.service';

describe('CategServController', () => {
  let controller: CategServController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategServController],
      providers: [CategServService],
    }).compile();

    controller = module.get<CategServController>(CategServController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

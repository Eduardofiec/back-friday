import { Test, TestingModule } from '@nestjs/testing';
import { AcessaController } from './acessa.controller';
import { AcessaService } from './acessa.service';

describe('AcessaController', () => {
  let controller: AcessaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcessaController],
      providers: [AcessaService],
    }).compile();

    controller = module.get<AcessaController>(AcessaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

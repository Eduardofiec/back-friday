import { Test, TestingModule } from '@nestjs/testing';
import { AcessaService } from './acessa.service';

describe('AcessaService', () => {
  let service: AcessaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcessaService],
    }).compile();

    service = module.get<AcessaService>(AcessaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

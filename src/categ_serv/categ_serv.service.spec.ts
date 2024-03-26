import { Test, TestingModule } from '@nestjs/testing';
import { CategServService } from './categ_serv.service';

describe('CategServService', () => {
  let service: CategServService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategServService],
    }).compile();

    service = module.get<CategServService>(CategServService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

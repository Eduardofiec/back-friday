import { Test, TestingModule } from '@nestjs/testing';
import { PrestServService } from './prest_serv.service';

describe('PrestServService', () => {
  let service: PrestServService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestServService],
    }).compile();

    service = module.get<PrestServService>(PrestServService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SecondProductService } from './second-product.service';

describe('SecondProductService', () => {
  let service: SecondProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecondProductService],
    }).compile();

    service = module.get<SecondProductService>(SecondProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

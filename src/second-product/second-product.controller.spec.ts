import { Test, TestingModule } from '@nestjs/testing';
import { SecondProductController } from './second-product.controller';
import { SecondProductService } from './second-product.service';

describe('SecondProductController', () => {
  let controller: SecondProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecondProductController],
      providers: [SecondProductService],
    }).compile();

    controller = module.get<SecondProductController>(SecondProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

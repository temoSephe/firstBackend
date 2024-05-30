import { Module } from '@nestjs/common';
import { SecondProductService } from './second-product.service';
import { SecondProductController } from './second-product.controller';

@Module({
  controllers: [SecondProductController],
  providers: [SecondProductService],
})
export class SecondProductModule {}

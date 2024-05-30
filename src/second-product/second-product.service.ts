import { Injectable } from '@nestjs/common';
import { CreateSecondProductDto } from './dto/create-second-product.dto';
import { UpdateSecondProductDto } from './dto/update-second-product.dto';

@Injectable()
export class SecondProductService {
  create(createSecondProductDto: CreateSecondProductDto) {
    return 'This action adds a new secondProduct';
  }

  findAll() {
    return `This action returns all secondProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} secondProduct`;
  }

  update(id: number, updateSecondProductDto: UpdateSecondProductDto) {
    return `This action updates a #${id} secondProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} secondProduct`;
  }
}

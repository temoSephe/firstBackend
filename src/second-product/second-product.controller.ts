import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SecondProductService } from './second-product.service';
import { CreateSecondProductDto } from './dto/create-second-product.dto';
import { UpdateSecondProductDto } from './dto/update-second-product.dto';

@Controller('second-product')
export class SecondProductController {
  constructor(private readonly secondProductService: SecondProductService) {}

  @Post()
  create(@Body() createSecondProductDto: CreateSecondProductDto) {
    return this.secondProductService.create(createSecondProductDto);
  }

  @Get()
  findAll() {
    return this.secondProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secondProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSecondProductDto: UpdateSecondProductDto) {
    return this.secondProductService.update(+id, updateSecondProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secondProductService.remove(+id);
  }
}

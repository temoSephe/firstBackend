import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { log } from 'console';
import { title } from 'process';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() body) {
    return  `დამატებული პროდუქტი პარამეტრებით: ${body.color} ${body.category} ${body.size} ${body.brand} ${body.title}`;
    
  }

  // @Get()
  // findAll(@Query('category') category, @Query('color') color, @Query('size') size, @Query('brand') brand, ) {
  //   return `თქვენ მოითხოვეთ ყველა ${color} ${category}ს სია, რომლის ზომაცაა ${size} და ბრენდი ${brand}`;
  // }
  @Get()
  findAll(@Query()  query) {
    return `თქვენ მოითხოვეთ ყველა ${query.color} ${query.category} სია, რომლის ზომაცაა ${query.size} და ბრენდი ${query.brand} `;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `თქვენი მოთხოვნილი პროდუქტის ინფორმაცია, რომლის id არის ${id} `;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `განახლებულია პროდუქტი #${id} პარამეტრებით: ${body.color} ${body.category} ${body.size} ${body.brand} ${body.price} ${body.title}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() body) {
    return `წაშლილია პროდუქტი #${id} პარამეტრებით: ${body.color} ${body.category} ${body.size} ${body.brand} ${body.price} ${body.title}`;
  }
}

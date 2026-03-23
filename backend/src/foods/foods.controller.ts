import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  create(@Body() createFoodDto: { name: string; description: string; price: number; type: string; expirationDate: string; restaurantId: number }) {
    return this.foodsService.create({
      ...createFoodDto,
      price: Number(createFoodDto.price),
      restaurantId: Number(createFoodDto.restaurantId),
      expirationDate: new Date(createFoodDto.expirationDate),
    });
  }

  @Get()
  findAll() {
    return this.foodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodsService.findOne(+id);
  }
}

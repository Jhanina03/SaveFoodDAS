import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  create(@Body() createRequestDto: { foodId: number; userId: number }) {
    return this.requestsService.create({
      foodId: Number(createRequestDto.foodId),
      userId: Number(createRequestDto.userId),
      status: 'PENDING',
    });
  }

  @Get()
  findAll() {
    return this.requestsService.findAll();
  }

  @Get('user/:userId')
  findAllByUser(@Param('userId') userId: string) {
    return this.requestsService.findAllByUser(+userId);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.requestsService.updateStatus(+id, status);
  }
}

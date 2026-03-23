import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FoodsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; description: string; price: number; type: string; expirationDate: Date; restaurantId: number }) {
    return (this.prisma as any).food.create({
      data: {
        ...data,
      },
    });
  }

  async findAll() {
    return (this.prisma as any).food.findMany({
      include: {
        restaurant: {
          select: { name: true, email: true },
        },
      },
    });
  }

  async findOne(id: number) {
    const food = await (this.prisma as any).food.findUnique({
      where: { id },
      include: {
        restaurant: {
          select: { name: true, email: true },
        },
      },
    });
    if (!food) {
      throw new NotFoundException(`Food with ID ${id} not found`);
    }
    return food;
  }
}

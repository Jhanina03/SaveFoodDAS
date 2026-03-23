import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { foodId: number; userId: number; status: string }) {
    return (this.prisma as any).foodRequest.create({
      data: {
        ...data,
      },
    });
  }

  async findAll() {
    return (this.prisma as any).foodRequest.findMany({
      include: {
        food: {
          include: { restaurant: { select: { name: true, email: true } } }
        },
        user: { select: { name: true, email: true, role: true } },
      },
    });
  }

  async findAllByUser(userId: number) {
    return (this.prisma as any).foodRequest.findMany({
      where: { userId },
      include: {
        food: {
           include: { restaurant: { select: { name: true, email: true } } }
        },
      },
    });
  }

  async updateStatus(id: number, status: string) {
    return (this.prisma as any).foodRequest.update({
      where: { id },
      data: { status },
    });
  }
}

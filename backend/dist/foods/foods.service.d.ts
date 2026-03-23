import { PrismaService } from '../prisma.service';
export declare class FoodsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        name: string;
        description: string;
        price: number;
        type: string;
        expirationDate: Date;
        restaurantId: number;
    }): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
}

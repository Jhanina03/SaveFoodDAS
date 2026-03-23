import { PrismaService } from '../prisma.service';
export declare class RequestsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        foodId: number;
        userId: number;
        status: string;
    }): Promise<any>;
    findAll(): Promise<any>;
    findAllByUser(userId: number): Promise<any>;
    updateStatus(id: number, status: string): Promise<any>;
}

import { FoodsService } from './foods.service';
export declare class FoodsController {
    private readonly foodsService;
    constructor(foodsService: FoodsService);
    create(createFoodDto: {
        name: string;
        description: string;
        price: number;
        type: string;
        expirationDate: string;
        restaurantId: number;
    }): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
}

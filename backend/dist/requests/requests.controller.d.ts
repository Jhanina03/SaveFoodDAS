import { RequestsService } from './requests.service';
export declare class RequestsController {
    private readonly requestsService;
    constructor(requestsService: RequestsService);
    create(createRequestDto: {
        foodId: number;
        userId: number;
    }): Promise<any>;
    findAll(): Promise<any>;
    findAllByUser(userId: string): Promise<any>;
    updateStatus(id: string, status: string): Promise<any>;
}

import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    postDetailOrder(body: CreateOrderDto): Promise<{
        status: number;
        message: string;
    }>;
}

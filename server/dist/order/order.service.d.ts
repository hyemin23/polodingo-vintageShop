import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    postDetailOrder(body: CreateOrderDto): Promise<{
        status: number;
        message: string;
    }>;
}

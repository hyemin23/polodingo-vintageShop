import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {
    constructor(
        private orderService: OrderService
    ) { }


    //Auth Gard 붙여주기
    @Post('detail')
    public async postDetailOrder(@Body() body:CreateOrderDto) {
        console.log("detailController 들어옴");
        console.log(body);

        const result = this.orderService.postDetailOrder(body);

        return result;
    }
}

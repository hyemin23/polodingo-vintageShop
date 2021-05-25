import { IsNumber, IsString } from "class-validator";


export class CreateOrderDto {
    @IsString()
    address: string;

    @IsString()
    name: string;

    @IsString()
    phoneNumber: string;

    @IsString()
    payment: string;

    @IsNumber()
    userId: number;

    @IsNumber()
    totalPrice: number;

    


}
import { ProductService } from './product.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get('load/:productType')
  public async getLoadProduct(@Param('productType') productType: string) {
    const result = await this.productService.getLoadProduct(productType);
    return result;
  }
}

import { ProductService } from './product.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }
  

  @Get('load/:productType')
  public async getLoadProduct(@Param('productType') productType: string) {
    const result = await this.productService.getLoadProduct(productType);
    return result;
  }

  @Get('search/:id')
  public async getLoadProductPathId(@Param()productTitle) {
    console.log("productTitle",productTitle);
    const result = await this.productService.getLoadProductTitle(productTitle.id);
    
    return result;
    
  }
}

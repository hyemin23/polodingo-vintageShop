import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getLoadProduct(productType: string): Promise<import("@nestjs/common").HttpException | import("./entities/product.entity").Product[]>;
    getLoadProductPathId(productTitle: any): Promise<any>;
    getLoadProductId(productId: number): Promise<import("./entities/product.entity").Product[]>;
}

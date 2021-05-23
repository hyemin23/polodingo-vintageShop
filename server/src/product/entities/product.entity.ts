import { Wish } from './../../wish/entities/wish.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => Wish, (wish) => wish.product)
  wish!: Wish;

  @Column()
  productName: string;

  @Column()
  productColor: string;

  @Column()
  productSize: string;
  @Column()
  procutRsize: string;
  @Column()
  productMsize: string;
  @Column()
  productMaterial: string;
  @Column()
  procutLogoColor: string;
  @Column()
  productPrice: number;
  @Column()
  productType: string;
  @Column()
  thumbnailPath: string;

  //product에 관련한 Img 테이블이 필요 여러가지 이미지를 가질 수 있기 때문에
  // image[] 배열로 연관관계 처리해아 하지만 현재는 간략하게 가기 위해서
  // 컬럼 여러개로 생성
  @Column()
  imgPath1: string;
  @Column()
  imgPath2: string;
  @Column()
  imgPath3: string;

  //기본값설정
  @Column({ default: 1 })
  productCount: number;
}

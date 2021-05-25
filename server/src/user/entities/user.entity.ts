import { OneToOne } from 'typeorm';
import { Review } from './../../review/entity/review.entity';
import { Wish } from './../../wish/entities/wish.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10, unique: true })
  userId: string;

  @Column({ length: 200, nullable: false })
  password: string;

  @Column({ length: 40 })
  email: string;

  @Column()
  name: string;

  @Column()
  roleType: string;

  @OneToOne(() => Wish, (wish) => wish.id)
  wish: Wish;

  @OneToMany(() => Review, (review) => review.id, {
    cascade: ['insert', 'update'],
  })
  review: Review;
}

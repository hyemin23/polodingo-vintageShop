import { Image } from './img.entity';
import { User } from './../../user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, {
    cascade: ['insert', 'update'],
  })
  user: User;

  @Column()
  reviewTitle: string;

  @Column()
  reviewContent: string;

  @Column()
  src: string;
}

import { Wish } from './../../wish/entities/wish.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order{

    @PrimaryGeneratedColumn()
    id: number;

    // @OneToOne(() => Wish,(wish)=>wish.id)
    // @JoinColumn()
    // wish: Wish;
    
    @Column()
    address: string;
    
    @Column()
    name: string;

    @Column()
    phoneNumber: string;

    @Column({nullable : true})
    payment: string;
    
    @Column()
    userId: number;
        
    
}
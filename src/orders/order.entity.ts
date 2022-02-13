import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  customerFirstName: string;

  @Column()
  customerLastName: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  totalQty: number;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column('decimal', { precision: 5, scale: 2 })
  shippingCost: number;
}

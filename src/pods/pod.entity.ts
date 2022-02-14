import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pod {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  weightInG: number;

  @Column()
  color: string;

  @Column()
  brand: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column('decimal', { precision: 5, scale: 2 })
  calories: number;

  @Column('decimal', { precision: 5, scale: 2 })
  protein: number;

  @Column('decimal', { precision: 5, scale: 2 })
  sugar: number;

  @Column('decimal', { precision: 5, scale: 2 })
  carbohydrates: number;

  @Column('decimal', { precision: 5, scale: 2 })
  sodium: number;

  @Column('decimal', { precision: 5, scale: 2 })
  cholesterol: number;

  @Column('decimal', { precision: 5, scale: 2 })
  totalFats: number;
}

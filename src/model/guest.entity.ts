import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'guest' })
export class GuestEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  category: string;

  @Column({ type: 'boolean' })
  is_baby: boolean;

  @Column({ type: 'boolean' })
  is_confirmed: boolean;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// map entity to a database table
@Entity()
class Roulette {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public number: number;
}
export default Roulette;

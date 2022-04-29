import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Responsible {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;
  
  @Column('varchar')
  contact: string;

  @Column('varchar')
  address: string;
}

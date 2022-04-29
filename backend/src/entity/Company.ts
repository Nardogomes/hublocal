import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  cnpj: string;

  @Column('varchar')
  description: string;
}

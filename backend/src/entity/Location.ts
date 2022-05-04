import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  address: string;
}

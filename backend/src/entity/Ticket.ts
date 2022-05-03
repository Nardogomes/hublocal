import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: string;

  @Column("varchar")
  title: string;

  @Column("varchar")
  createdAt: string;

  @Column("varchar")
  updatedAt: string;

  @Column("varchar")
  owner: string;

  @Column("varchar")
  tec_ticket: string;

  @Column("varchar")
  status: string;

  @Column("varchar")
  place: string;
}

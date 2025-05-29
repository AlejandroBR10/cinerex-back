import { Ticket } from "src/ticket/entities/ticket.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'client' }) // 'client' o 'admin'
  role: string;

  @OneToMany(() => Ticket, ticket => ticket.user)
  tickets: Ticket[];
}

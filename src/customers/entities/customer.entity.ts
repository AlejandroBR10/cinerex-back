import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "src/auth/entities/user.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn("uuid")
  customerId: string;

  @Column('text')
  customerName: string;
  @Column('text')
  customerLastName: string;


  @Column({ unique: true })
  customerEmail: string;

  @Column("text")
  customerPhoneNumber: string;

  @OneToMany(() => Ticket, (ticket) => ticket.customer)
  tickets: Ticket[];

 @OneToOne(() => User, { eager: true })
  @JoinColumn({
    name: "userId",
  })
  user: User | string;
}

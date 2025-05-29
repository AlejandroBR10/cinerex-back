import { Ticket } from "src/ticket/entities/ticket.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column('text', { unique: true })
  userEmail: string;

  @Column('text')
  userPassword: string;

@Column('simple-array',{
    default: "Customer"
})
userRoles: string[];

  @OneToMany(() => Ticket, ticket => ticket.user)
  tickets: Ticket[];
}
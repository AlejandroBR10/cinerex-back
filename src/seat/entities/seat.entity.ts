import { Showtime } from "src/showtime/entities/showtime.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";

@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  @Column("text")
  seatNumber: string; // Ej: A1, B2

  @ManyToOne(() => Showtime, showtime => showtime.seats)
  showtime: Showtime;

  @Column({ default: false })
  isReserved: boolean;

  @OneToOne(() => Ticket, ticket => ticket.seat, { nullable: true })
  ticket: Ticket;
}

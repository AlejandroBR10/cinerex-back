import { Seat } from "src/seat/entities/seat.entity";
import { Showtime } from "src/showtime/entities/showtime.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { Column, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class Reservation {
  /*  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Showtime, func => func.seatReservations, { onDelete: 'CASCADE' })
  showTime: Showtime;

  @ManyToOne(() => Seat, { eager: true })
  seat: Seat;

  @Column({ default: true })
  isAvailable: boolean;

  @OneToOne(() => Ticket, ticket => ticket.reservation)
  ticket: Ticket;*/

  //Descomentenla si la van a usar para que se cree la entidad
}

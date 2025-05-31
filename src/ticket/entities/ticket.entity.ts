import { User } from "src/auth/entities/user.entity";
import { Customer } from "src/customers/entities/customer.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
import { Seat } from "src/seat/entities/seat.entity";
import { Showtime } from "src/showtime/entities/showtime.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, Column } from "typeorm";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn("uuid")
  id: string;

    @Column()
  price: number;

  @Column()
  purchaseDate: Date;

  @ManyToOne(() => Customer, customer => customer.tickets)
  @JoinColumn({ name: 'customerId' })
  customer: Customer | string;

  @ManyToOne(() => Showtime, showtime => showtime.tickets)
  @JoinColumn({ name: 'showTimeId' })
  showtime: Showtime | string;

  /*@OneToOne(() => Reservation, res => res.ticket)
 reservation: Reservation;*/


}

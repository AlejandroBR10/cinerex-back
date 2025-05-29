import { User } from "src/auth/entities/user.entity";
import { Seat } from "src/seat/entities/seat.entity";
import { Showtime } from "src/showtime/entities/showtime.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, Column } from "typeorm";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.tickets)
  user: User;

  @ManyToOne(() => Showtime, showtime => showtime.tickets)
  showtime: Showtime;

  @OneToOne(() => Seat, seat => seat.ticket)
  @JoinColumn()
  seat: Seat;

  @Column()
  price: number;

  @Column()
  purchaseDate: Date;
}

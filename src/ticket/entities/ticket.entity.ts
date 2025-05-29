import { Seat } from "src/seat/entities/seat.entity";
import { Showtime } from "src/showtime/entities/showtime.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, Column } from "typeorm";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn("uuid")
  id: string;

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

import { Movie } from "src/movie/entities/movie.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
import { Room } from "src/room/entities/room.entity";
import { Seat } from "src/seat/entities/seat.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";

@Entity()
export class Showtime {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({type : "timestamp"})
  dateTime: Date;
  
    @Column('decimal')
  price: number;

    @Column()
  remainingSeats: number;

  @Column('text')
  lenguage : string;

   @ManyToOne(() => Movie, movie => movie.showtimes, { eager: true }  )
  @JoinColumn({ name: 'movieId' })
  movie: Movie | string;

  @ManyToOne(() => Room, room => room.showtimes, { eager: true })
  @JoinColumn({ name: 'roomId' })
  room:   Room | string;

  @OneToMany(() => Ticket, ticket => ticket.showtime)
  tickets: Ticket[];

 /*@OneToMany(() => Reservation, res => res.showTime)
  seatReservations: Reservation[];*/

}

import { Movie } from "src/movie/entities/movie.entity";
import { Room } from "src/room/entities/room.entity";
import { Seat } from "src/seat/entities/seat.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Showtime {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  startTime: Date;

  @ManyToOne(() => Movie, movie => movie.showtimes)
  movie: Movie;

  @ManyToOne(() => Room, room => room.showtimes)
  room: Room;

  @OneToMany(() => Seat, seat => seat.showtime)
  seats: Seat[];

  @OneToMany(() => Ticket, ticket => ticket.showtime)
  tickets: Ticket[];
}

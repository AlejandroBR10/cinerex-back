import { Seat } from "src/seat/entities/seat.entity";
import { Showtime } from "src/showtime/entities/showtime.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn("uuid")
  roomId: string;

  @Column("text")
  roomName: string;

  @Column({type: "int"})
  roomCapacity: number;

    /*@OneToMany(() => Seat, seat => seat.room)
  seats: Seat[]*/

  @OneToMany(() => Showtime, showtime => showtime.room)
  showtimes: Showtime[];
}

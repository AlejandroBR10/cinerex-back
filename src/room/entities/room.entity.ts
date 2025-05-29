import { Showtime } from "src/showtime/entities/showtime.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  totalSeats: number;

  @OneToMany(() => Showtime, showtime => showtime.room)
  showtimes: Showtime[];
}

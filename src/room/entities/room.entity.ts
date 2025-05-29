import { UUID } from "crypto";
import { Showtime } from "src/showtime/entities/showtime.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  name: string;

  @Column("number")
  totalSeats: number;

  @OneToMany(() => Showtime, showtime => showtime.room)
  showtimes: Showtime[];
}

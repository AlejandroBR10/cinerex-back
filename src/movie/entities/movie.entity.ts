import { IsUUID } from "class-validator";
import { Showtime } from "src/showtime/entities/showtime.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";


@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column("text")
  title: string;

  @Column("text")
  description: string;

  @Column()
  durationMinutes: number;

  @Column("text")
  genre: string;

  @Column("text")
  imageUrl: string;

  @OneToMany(() => Showtime, showtime => showtime.movie)
  showtimes: Showtime[];
}

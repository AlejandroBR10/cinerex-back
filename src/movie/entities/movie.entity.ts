import { IsUUID } from "class-validator";
import { Showtime } from "src/showtime/entities/showtime.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";


@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  movieId: string;
  @Column("text")
  movieTitle: string;

  @Column("text")
  movieDescription: string;

  @Column()
  movieDurationMinutes: number;

  @Column("text")
  movieGenre: string;

  @Column("text")
  movieImageUrl: string;

  @OneToMany(() => Showtime, showtime => showtime.movie)
  showtimes: Showtime[];
}

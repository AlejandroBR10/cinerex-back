import { Room } from "src/room/entities/room.entity";
import { Showtime } from "src/showtime/entities/showtime.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { Entity, PrimaryColumn, Column, ManyToOne, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

//@Entity()
export class Seat {
 /* @PrimaryGeneratedColumn("uuid")
  seatId: string; // Ej: A1, B2

   @Column('text')
  seatNumber: string;

  @ManyToOne(() => Room, room => room.seats)
  room: Room;*/


  //Esta comentada para evitar problemas al hacr peticiones al Postman
  //Si quieren usarla solo descomentenla y tambien descomenten las relaciones 
  // que existen en las demas tablas

}

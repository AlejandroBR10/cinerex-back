import { Module } from '@nestjs/common';

import { MovieModule } from './movie/movie.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { SeatModule } from './seat/seat.module';
import { AuthModule } from './auth/auth.module';
import { TicketModule } from './ticket/ticket.module';
import { RoomModule } from './room/room.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import { ReservationModule } from './reservation/reservation.module';
import { User } from './auth/entities/user.entity';
import { Movie } from './movie/entities/movie.entity';
import { Ticket } from './ticket/entities/ticket.entity';
import { Room } from './room/entities/room.entity';
import { Customer } from './customers/entities/customer.entity';
import { Showtime } from './showtime/entities/showtime.entity';

@Module({
  imports: [
     ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.host,
        port: 5434,
        username: 'postgres',
        password: "TheBestPassword",
        database: process.env.name,
        entities: [User,Movie,Ticket,Room,Customer,Showtime],
        autoLoadEntities: true,
        synchronize: true ,
      }),
   
 AuthModule, MovieModule, ShowtimeModule, SeatModule, TicketModule, RoomModule, CustomersModule, ReservationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

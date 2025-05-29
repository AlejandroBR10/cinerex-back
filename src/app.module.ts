import { Module } from '@nestjs/common';

import { MovieModule } from './movie/movie.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { SeatModule } from './seat/seat.module';
import { AuthModule } from './auth/auth.module';
import { TicketModule } from './ticket/ticket.module';
import { RoomModule } from './room/room.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.host,
        port: 5434,
        username: 'postgres',
        password: "TheBestPassword",
        database: process.env.name,
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
      }),
    ConfigModule.forRoot(),
 AuthModule, MovieModule, ShowtimeModule, SeatModule, TicketModule, RoomModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

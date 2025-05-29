import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { SeatModule } from './seat/seat.module';
import { AuthModule } from './auth/auth.module';
import { TicketModule } from './ticket/ticket.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [UserModule, AuthModule, MovieModule, ShowtimeModule, SeatModule, TicketModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

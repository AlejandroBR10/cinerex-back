import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsDecimal, IsInt, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { Movie } from 'src/movie/entities/movie.entity';
import { Room } from 'src/room/entities/room.entity';

export class CreateShowtimeDto {
@ApiProperty()   
 @IsUUID("4")
    @IsOptional()
   id: string;
 
 @ApiProperty()
    @IsDateString()
   dateTime: Date;
   
    @ApiProperty()
    @IsNumber()
   price: number;

   @ApiProperty()
   @IsNumber()
  remainingSeats: number;
 
     @ApiProperty()
     @IsOptional()
    @IsUUID("4")
   movie?: string;
 
    @ApiProperty()
     @IsOptional()
    @IsUUID("4")
   room?:  string;
 
}

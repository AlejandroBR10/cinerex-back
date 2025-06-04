import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, MaxLength, IsOptional, IsNumber, IsUUID } from 'class-validator';
import { Showtime } from 'src/showtime/entities/showtime.entity';

export class CreateRoomDto {
   @ApiProperty()
    //@IsString()
    //@IsUUID("4")
    @IsNumber()
    roomId: number;
  
    @ApiProperty()
    @IsString()
  @MaxLength(50)
    roomName: string;
  
 @ApiProperty()
    @IsNumber()
    roomCapacity: number;
  
    @ApiProperty()
    @IsOptional()
    showtimes: Showtime[];
}

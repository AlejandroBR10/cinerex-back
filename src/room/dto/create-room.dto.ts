import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, MaxLength, IsOptional, IsNumber, IsUUID } from 'class-validator';
import { Showtime } from 'src/showtime/entities/showtime.entity';

export class CreateRoomDto {
   @ApiProperty()
    @IsString()
    @IsUUID("4")
    @IsOptional()
    @MaxLength(30)
    roomId: string;
  
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

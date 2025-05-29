import { IsString, IsInt } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  name: string;

  @IsInt()
  totalSeats: number;
}

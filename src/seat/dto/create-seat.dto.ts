import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateSeatDto {
  @IsString()
  seatNumber: string;

  @IsInt()
  showtimeId: number;

  @IsBoolean()
  isReserved: boolean;
}

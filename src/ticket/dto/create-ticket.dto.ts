import { IsInt, IsDateString } from 'class-validator';

export class CreateTicketDto {
  @IsInt()
  userId: number;

  @IsInt()
  showtimeId: number;

  @IsInt()
  seatId: number;

  @IsInt()
  price: number;

  @IsDateString()
  purchaseDate: string;
}

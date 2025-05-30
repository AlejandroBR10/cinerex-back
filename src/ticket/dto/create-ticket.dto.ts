import { ApiProperty } from '@nestjs/swagger';
import { strict } from 'assert';
import { IsInt, IsDateString, IsString, IsNumber, IsOptional, IsUUID, IsObject } from 'class-validator';
import { Customer } from 'src/customers/entities/customer.entity';
import { Seat } from 'src/seat/entities/seat.entity';
import { Showtime } from 'src/showtime/entities/showtime.entity';

export class CreateTicketDto {
  @ApiProperty()
    @IsUUID("4")
    @IsOptional()   
     id: string;
  
      @ApiProperty()
    @IsNumber()
    price: number;
  
    @ApiProperty()
    @IsDateString() 
    purchaseDate: Date;
  
    @ApiProperty()
    @IsUUID("4")
    @IsOptional()
    customer?: string ;
  
       @ApiProperty()
    @IsUUID("4")
    @IsOptional()
    showtime?: string  ;
  
  /* @ApiProperty()
    @IsString()
    @IsOptional()
   seat: Seat | string;*/
  
}

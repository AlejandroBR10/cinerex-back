import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID, IsOptional, IsBoolean } from "class-validator";
import { Seat } from "src/seat/entities/seat.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { ManyToOne, Column, OneToOne } from "typeorm";

export class CreateReservationDto {
 @ApiProperty()
    @IsUUID("4")
    @IsOptional()
  id: string;


  @ApiProperty()
  @IsString()
@IsOptional()
  seat: Seat | string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isAvailable: boolean;



}

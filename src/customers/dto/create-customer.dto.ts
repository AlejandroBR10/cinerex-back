import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, isEmail, IsObject, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { User } from "src/auth/entities/user.entity";

export class CreateCustomerDto {

      @ApiProperty()
        @IsString()
        @IsUUID("4")
        @IsOptional()
        @MaxLength(30)
      customerId: string;
    
      @ApiProperty()
      @IsString()
      @MaxLength(40)
      customerName: string;
        @ApiProperty()
      @IsString()
      @MaxLength(40)
      customerLastName: string;
    
      @ApiProperty()
      @IsEmail()
      customerEmail: string;
    
       @ApiProperty()
        @IsString()
        @MaxLength(10)
      customerPhoneNumber: string;
    
     
        @ApiPropertyOptional()
        @IsOptional()
        @IsObject ()
        user : User | string
}

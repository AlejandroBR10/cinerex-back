import { IsEmail, IsIn, IsOptional, IsString, MinLength } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{

    @ApiProperty({
        default : "user@gmail.com"
    })
    @IsEmail()
    userEmail: string;
    @ApiProperty({
        default : "user123"
    })
    @IsString()
    @MinLength(8)
    userPassword: string;
    @ApiProperty({
        default : "Customer"
    })
    @IsOptional()
    @IsIn(["Admin", "Customer", "Manager"])
    userRoles : string[];


}

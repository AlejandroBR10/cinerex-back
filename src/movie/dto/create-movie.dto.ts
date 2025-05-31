import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, MaxLength, IsNumber, IsUUID } from 'class-validator';
import { Showtime } from 'src/showtime/entities/showtime.entity';

export class CreateMovieDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsUUID("4")
  @MaxLength(30)
  movieId: string;
 @ApiProperty()
  @IsString()
  @MaxLength(50)
  movieTitle: string;

  @ApiProperty()
  @IsString()
  @MaxLength(240)
  movieDescription: string;

  @ApiProperty()
  @IsNumber()
  movieDurationMinutes: number;

 @ApiProperty()
  @IsString()
  @MaxLength(30)
  movieGenre: string;

@ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(30)
  movieImageUrl: string;

  @ApiProperty()
  @IsOptional()
  showtimes: Showtime[];
}

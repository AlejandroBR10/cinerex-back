import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, MaxLength, IsNumber, IsUUID } from 'class-validator';
import { Showtime } from 'src/showtime/entities/showtime.entity';

export class CreateMovieDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  movieId: number;
 @ApiProperty()
  @IsString()
  @MaxLength(50)
  movieTitle: string;

  @ApiProperty()
  @IsString()
  movieDescription: string;

  @ApiProperty()
  @IsNumber()
  movieDurationMinutes: number;

 @ApiProperty()
  @IsString()
  movieGenre: string;

@ApiProperty()
  @IsString()
  @IsOptional()
  movieImageUrl: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  movieTrailer: string;

  @ApiProperty()
  @IsOptional()
  showtimes: Showtime[];
}

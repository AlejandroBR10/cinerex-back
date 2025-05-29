import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsInt()
  durationMinutes: number;

  @IsString()
  genre: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}

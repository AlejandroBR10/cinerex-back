import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, ParseIntPipe } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiAuth } from 'src/auth/decorators/api.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ROLES } from 'src/auth/constants/roles.constants';

@ApiAuth()
@ApiBearerAuth()
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Auth(ROLES.ADMIN)
  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }
 @Auth(ROLES.CUSTOMER)
  @Get()
  findAll() {
    return this.movieService.findAll();
  }
 @Auth(ROLES.CUSTOMER)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.movieService.findOne(+id);
  }
 @Auth()
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMovieDto: UpdateMovieDto
  ) {
    return this.movieService.update(+id, updateMovieDto);
  }
 @Auth()
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.movieService.remove(+id);
  }
}

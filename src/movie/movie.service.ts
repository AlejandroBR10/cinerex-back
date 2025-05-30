import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>
  ){}
  create(createMovieDto: CreateMovieDto) {
    const movie =  this.movieRepository.save(createMovieDto);
    return movie;
  }

  findAll() {
    return this.movieRepository.find({
      relations : {
        showtimes : true
      }
    });
  }

  findOne(id: string) {
    const movie = this.movieRepository.findOne({
      where  :{
        movieId : id
      }, 
      relations : {
        showtimes : true
      }
    });
    if(!movie) throw new NotFoundException("No movie found");
    return movie;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    const movieToUpdate = await this.movieRepository.preload({
      movieId: id,
      ...updateMovieDto
    })
    if(!movieToUpdate){
      throw new NotFoundException(`Movie con el id ${id} no fue encontrado`);
    } 
    return this.movieRepository.save(movieToUpdate);
  }

  async remove(id: string) {
   this.findOne(id);
   this.movieRepository.delete({
    movieId : id
   })
    
    return `Movie con el id-> #${id} eliminado`;
  }
}

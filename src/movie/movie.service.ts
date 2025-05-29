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
    return this.movieRepository.save(createMovieDto)
  }

  findAll() {
    return this.movieRepository.find();
  }

  findOne(id: string) {
    const movie = this.movieRepository.findOneBy({
      id: id,
    })
    if(!movie) throw new NotFoundException("No movie found");
    return movie;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    const movieToUpdate = await this.movieRepository.preload({
      id: id,
      ...updateMovieDto
    })
    if(!movieToUpdate){
      throw new NotFoundException(`Movie con el id ${id} no fue encontrado`);
    } 
    return this.movieRepository.save(movieToUpdate);
  }

  async remove(id: string) {
    const movieToRemove = await this.movieRepository.findOneBy({
      id: id,
    });
    if(!movieToRemove){
      throw new NotFoundException(`Movie con el id: ${id} no ha sido encontrado`);
    }
    return this.movieRepository.remove(movieToRemove);
  }
}

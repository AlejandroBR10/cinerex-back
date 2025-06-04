import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Showtime } from './entities/showtime.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShowtimeService {
  constructor(
    @InjectRepository(Showtime)
    private showtimeRepository: Repository<Showtime> 
  ){}
  create(createShowtimeDto: CreateShowtimeDto) {
    const showTime = this.showtimeRepository.save(createShowtimeDto);
    
    return showTime;
  }

  findAll() {
    return this.showtimeRepository.find({
      relations : {
        movie  : true,
        room : true
      }
    }
    );
  }

  findOne(id: string) {
    const showtime = this.showtimeRepository.findOne({
      where : {
        id: id,
      }, relations : {
        movie  :true,
        room :true
      }
      
    })
    if(!showtime) throw new NotFoundException(`Showtime con el id: ${id} no encontrado`)
    return showtime;
  }

  async update(id: string, updateShowtimeDto: UpdateShowtimeDto) {
    const showToUpdate = await this.showtimeRepository.preload({
      id: id,
      ...updateShowtimeDto
    })
    if(!showToUpdate) throw new NotFoundException();
    this.showtimeRepository.save(showToUpdate);
    return showToUpdate;
  }

  async remove(id: string) {
   this.findOne(id);
   this.showtimeRepository.delete({
    id : id
   });
     return `ShowTime con el id-> #${id} eliminado`;
}
}

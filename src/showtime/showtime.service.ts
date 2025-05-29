import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Showtime } from './entities/showtime.entity';
import { Repository } from 'typeorm';

@Injectable()
export class showtimeRepository {
  constructor(
    @InjectRepository(Showtime)
    private showtimeRepository: Repository<Showtime> 
  ){}
  create(createShowtimeDto: CreateShowtimeDto) {
    return this.showtimeRepository.save(createShowtimeDto);
  }

  findAll() {
    return this.showtimeRepository.find();
  }

  findOne(id: string) {
    const showtime = this.showtimeRepository.findOneBy({
      id: id,
    })
    if(!showtime) throw new NotFoundException(`Showtime con el id: ${id} no encontrado`)
    return showtime;
  }

  async update(id: string, updateShowtimeDto: UpdateShowtimeDto) {
    const showToUpdate = await this.showtimeRepository.preload({
      id: id,
      ...updateShowtimeDto
    })
    if(!showToUpdate) throw new BadRequestException();
  }

  async remove(id: string) {
    const showToRemove = await this.showtimeRepository.findOneBy({
      id: id,
    })
    if(!showToRemove) throw new NotFoundException(`show con el id: ${id} no encontrado`);
    return this.showtimeRepository.remove(showToRemove);
  }
}

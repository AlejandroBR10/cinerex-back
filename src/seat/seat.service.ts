import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seat } from './entities/seat.entity';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat)
    private seatRepository: Repository<Seat>
  ){}
  create(createSeatDto: CreateSeatDto) {
    return this.seatRepository.save(createSeatDto);
  }

  findAll() {
    return this.seatRepository.find()
  }

  findOne(id: string) {
    const seat = this.seatRepository.findOneBy({
      seatNumber: id,
    })
    if(!seat) throw new NotFoundException(`Seat con el numero: ${id} no fue encontrado`);
    return seat;
  }

  async update(id: string, updateSeatDto: UpdateSeatDto) {
    const seatToUpdate = await this.seatRepository.preload({
      seatNumber: id,
      ...updateSeatDto
    })
    if(!seatToUpdate) throw new NotFoundException(`Seat con el numero: ${id} no fue encontrado`);
    return this.seatRepository.save(seatToUpdate);
  }

  async remove(id: string) {
    const seatToRemove = await this.seatRepository.findOneBy({
      seatNumber: id,
    })

    if(!seatToRemove) throw new NotFoundException("ASIENTO NO ENCONTRADO");
    return this.seatRepository.remove(seatToRemove);
  }
}

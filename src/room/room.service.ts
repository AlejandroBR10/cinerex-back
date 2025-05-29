import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>
  ){}
  create(createRoomDto: CreateRoomDto) {
    return this.roomRepository.save(createRoomDto);
  }

  findAll() {
    return this.roomRepository.find();
  }

  findOne(id: string) {
    const room = this.roomRepository.findOneBy({
      id: id,
    })
    if(!room) throw new NotFoundException(`Room con el id: ${id} no ha sido encontrado`);
    return room;
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    const roomToUpdate = await this.roomRepository.preload({
      id: id,
      ...updateRoomDto
    })
    if(!roomToUpdate) throw new BadRequestException();
    return this.roomRepository.save(roomToUpdate);
  }

  async remove(id: string) {
    const roomToDelete = await this.roomRepository.findOneBy({
      id: id,
    })
    if(!roomToDelete) throw new NotFoundException(`Room con el id: ${id} no encontrado`);
    return this.roomRepository.remove(roomToDelete);
  }
}

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
    const room = this.roomRepository.save(createRoomDto);
    return room;
  }

  findAll() {
    return this.roomRepository.find({
      relations  :{
        showtimes :true
      }
    });
  }

  findOne(id: string) {
    const room = this.roomRepository.findOne({
      where : {
      roomId: id,
      }, relations : {
        showtimes : true
      }
    });
    if(!room) throw new NotFoundException(`Room con el id: ${id} no ha sido encontrado`);
    return room;
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    const roomToUpdate = await this.roomRepository.preload({
      roomId: id,
      ...updateRoomDto
    })
    if(!roomToUpdate) throw new BadRequestException();
    this.roomRepository.save(roomToUpdate)
    return roomToUpdate;
  }

  async remove(id: string) {
  this.findOne(id);
  this.roomRepository.delete({
    roomId : id
  })
    return `Room con el id-> #${id} eliminado`;
}
}

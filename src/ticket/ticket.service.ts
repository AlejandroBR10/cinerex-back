import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>
  ) { }
  create(createTicketDto: CreateTicketDto) {
    return this.ticketRepository.save(createTicketDto);
  }

  findAll() {
    return this.ticketRepository.find();
  }

  findOne(id: string) {
    const ticket = this.ticketRepository.findOneBy({
      id: id,
    })
    if (!ticket) throw new NotFoundException(`Ticket con el id: ${id} no encontrado`);
    return ticket;
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const ticketToUpdate = await this.ticketRepository.preload({
      id: id,
      ...updateTicketDto
    })
    if (!ticketToUpdate) throw new NotFoundException(`Ticket con el id: ${id} no encontrado`);
    return this.ticketRepository.save(ticketToUpdate);
  }

  async remove(id: string) {
    const ticketToRemove = await this.ticketRepository.findOneBy({
      id: id,
    })
    if (!ticketToRemove) throw new NotFoundException(`Ticket con el id: ${id} no encontrado`);
    return this.ticketRepository.remove(ticketToRemove);
  }
}

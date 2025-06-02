import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiAuth } from 'src/auth/decorators/api.decorator';
import { ROLES } from 'src/auth/constants/roles.constants';


@ApiAuth()
@ApiBearerAuth()
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  @Auth(ROLES.CUSTOMER, ROLES.ADMIN)
  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }
  @Auth(ROLES.CUSTOMER)
  @Get()
  findAll() {
    return this.ticketService.findAll();
  }
  @Auth(ROLES.CUSTOMER)
  @Get(':id')
  findOne(@Param('id',new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.ticketService.findOne(id);
  }
  @Auth()
  @Patch(':id')
  update(@Param('id',new ParseUUIDPipe({ version: "4" })) id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(id, updateTicketDto);
  }
  @Auth()
  @Delete(':id')
  remove(@Param('id',new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.ticketService.remove(id);
  }
}

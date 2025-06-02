import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiAuth } from 'src/auth/decorators/api.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ROLES } from 'src/auth/constants/roles.constants';

@ApiAuth()
@ApiBearerAuth()
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

   @Auth(ROLES.CUSTOMER)
  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }
 @Auth(ROLES.CUSTOMER)
  @Get()
  findAll() {
    return this.roomService.findAll();
  }
 @Auth(ROLES.CUSTOMER)
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.roomService.findOne(id);
  }
 @Auth()
  @Patch(':id')
  update(@Param('id',new ParseUUIDPipe({ version: "4" })) id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.update(id, updateRoomDto);
  }
 @Auth()
  @Delete(':id')
  remove(@Param('id',new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.roomService.remove(id);
  }
}

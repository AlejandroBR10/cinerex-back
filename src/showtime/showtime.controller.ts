import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ShowtimeService } from './showtime.service';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiAuth } from 'src/auth/decorators/api.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ROLES } from 'src/auth/constants/roles.constants';


@ApiAuth()
@ApiBearerAuth()
@Controller('showtime')
export class ShowtimeController {
  constructor(private readonly showtimeService: ShowtimeService) {}

    @Auth(ROLES.CUSTOMER)
  @Post()
  create(@Body() createShowtimeDto: CreateShowtimeDto) {
    return this.showtimeService.create(createShowtimeDto);
  }
  @Auth()
  @Get()
  findAll() {
    return this.showtimeService.findAll();
  }
  @Auth()
  @Get(':id')
  findOne(@Param('id',new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.showtimeService.findOne(id);
  }
  @Auth()
  @Patch(':id')
  update(@Param('id',new ParseUUIDPipe({ version: "4" })) id: string, @Body() updateShowtimeDto: UpdateShowtimeDto) {
    return this.showtimeService.update(id, updateShowtimeDto);
  }
  @Auth()
  @Delete(':id')
  remove(@Param('id',new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.showtimeService.remove(id);
  }
}

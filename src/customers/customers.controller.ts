import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, BadRequestException } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiAuth } from 'src/auth/decorators/api.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ROLES } from 'src/auth/constants/roles.constants';
import { Req } from '@nestjs/common';


@ApiAuth()
@ApiBearerAuth()
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  //@Auth(ROLES.ADMIN, ROLES.CUSTOMER)
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  //@Auth(ROLES.CUSTOMER)
  @Get()
  findAll() {
    return this.customersService.findAll();
  }


@Auth(ROLES.CUSTOMER)
@Get('me')
async getMyCustomer(@Req() req) {
  const userId = req.user.userId;
  const customer = await this.customersService.findByUserId(userId);
  if (!customer) {
    throw new BadRequestException('No se encontró el customer para este usuario');
  }
  return customer;
}

  @Auth(ROLES.CUSTOMER)
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.customersService.findOne(id);
  }

   @Auth(ROLES.CUSTOMER)
  @Get("email/:email")
  findOneByEmail(@Param("email") email : string) {
    return this.customersService.findOneByEmail(email);
  }
  @Auth()
  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe({ version: "4" })) id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Auth()
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.customersService.remove(id);
  }
}

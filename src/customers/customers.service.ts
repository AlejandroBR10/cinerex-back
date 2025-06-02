import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { NOTFOUND } from 'dns';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository : Repository<Customer>
  ){}
  create(createCustomerDto: CreateCustomerDto) {
   const customer = this.customerRepository.save(createCustomerDto);
   return customer;
  }

  findAll() {
    return this.customerRepository.find({
      relations : {
        user : true,
       tickets  :true
        
      }
    });
  }

  findOne(id: string) {
    const customer = this.customerRepository.findOne({
      where: {
        customerId  :id
      }, relations : {
        user: true,
        tickets : true
      }
    });
    if(!customer) throw new NotFoundException("Cliente no encontrado");
    return customer;
  }

  findOneByEmail(email: string) {
    const customer = this.customerRepository.findOne({
      where: {
        customerEmail  :email
      }, relations : {
        user: true,
        tickets : true
      }
    });
    if(!customer) throw new NotFoundException("Cliente no encontrado");
    return customer;
  }


  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
   const customerToUpdate  = await this.customerRepository.preload({
    customerId : id,
    ...updateCustomerDto
   });
   if(!customerToUpdate) throw new NotFoundException();
   this.customerRepository.save(customerToUpdate);
   return customerToUpdate;
  }

  remove(id: string) {
    this.findOne(id);
    this.customerRepository.delete({
      customerId : id
    });
    return `Cliente con el id-> #${id} eliminado`;
  }
}

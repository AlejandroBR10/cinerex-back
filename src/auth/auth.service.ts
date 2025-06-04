import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as  bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Customer } from 'src/customers/entities/customer.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
          private userRepository: Repository<User>,
          private  jwtService: JwtService
  ){}

  async registerUser(createUserDto: CreateUserDto){
    createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword , 5)
      const user = this.userRepository.save(createUserDto);
      return user;
  }

  


  findOneByEmail(email: string) {
    const user = this.userRepository.findOne({
      where: {
        userEmail  :email
      }
    });
    if(!user) throw new NotFoundException("Cliente no encontrado");
    return user;
  }

  async loginUser(loginUserDto : LoginUserDto){
    const user = await this.userRepository.findOne({
      where: {
        userEmail: loginUserDto.userEmail
      },
    });
    
    if(!user) throw new UnauthorizedException("No estas autorizado");
    
    const match = await bcrypt.compare(loginUserDto.userPassword, user.userPassword);
   
    if(!match) throw new UnauthorizedException("No estas autorizado");
      const payload = {
        userId: user.userId, // <-- nueva linea de prueba
        userEmail : user.userEmail,
        userRoles: user.userRoles
    };
    const token = this.jwtService.sign(payload);
    console.log(token);
    return token;
  } 

  async updateUser(email: string, updateUserDto: UpdateUserDto){    
   const newUserData =  await this.userRepository.preload({
      userId: email, 
      ...updateUserDto
    })
    if(!newUserData){
      throw new NotFoundException("No se encontro el usuario");
    }
    this.userRepository.save(newUserData);
    return newUserData;
  }

  async login(user: User, customer: Customer) {
    const payload = {
      userId: user.userId, 
      customerId :customer.customerId, 
      userEmail: user.userEmail,
      userRoles: user.userRoles,
      // Aqui podemos importar otros campos para el customer
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
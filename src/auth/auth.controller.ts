import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

import { LoginUserDto } from './dto/login-user.dto';
import { ApiAuth } from './decorators/api.decorator';
import { Response } from 'express';
import { TOKEN_NAME } from './constants/jwt.constants';
import { Cookies } from './decorators/cookies.decorator';
import { ROLES } from './constants/roles.constants';
import { Auth } from './decorators/auth.decorator';
import { AuthGuard } from './guards/auth.guards';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 @Auth(ROLES.ADMIN, ROLES.CUSTOMER)
// @UseGuards(AuthGuard)
  @Get('token')
    getToken(@Req() req) {
      console.log("Usuario decodificado:",req.user);
      return { token: req.cookies[TOKEN_NAME], user: req.user};
    }

  @Post()
  singup(@Body() createUserDto: CreateUserDto){
    return this.authService.registerUser(createUserDto);
  }

  
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto , @Res({passthrough: true}) response: Response,@Cookies() cookies:any){
    const token = await this.authService.loginUser(loginUserDto);
    
    response.cookie(TOKEN_NAME, token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24 * 7,

    })
    return token;
  }
  
  @Patch("/user/:email")
  updateUser(@Param("email") email:string, @Body() updateUserDto : UpdateUserDto ){
    return this.authService.updateUser(email, updateUserDto);
  }

  @Get('check-cookie')
  checkCookie(@Req() req: Request) {
    // Si llegas aquí, el token fue válido
    return { ok: true, user: req['user'] };
  }
}

import { Body, Controller, Res, Post, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto, AdminRegisterDto } from './auth.dto';

@ApiTags('Auth')
@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('api/auth/createAdmin')
  @ApiResponse({ status: 201, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  public async adminRegister(
    @Body() adminRegisterDto: AdminRegisterDto,
    @Res() res,
  ) {
    try {
      const data = await this.authService.adminRegister(adminRegisterDto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @Post('api/auth/login')
  @ApiResponse({ status: 201, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  public async Login(@Body() loginDto: LoginDto, @Res() res) {
    try {
      const data = await this.authService.login(loginDto);
      res.json({ accessToken: data });
    } catch (error) {
      throw error;
    }
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  public async healhCheck(@Body() loginDto: LoginDto, @Res() res) {
    res.json('OK');
  }
}

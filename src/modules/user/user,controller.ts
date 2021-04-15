import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersServices } from './user.service';
import { IUser } from './interface/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersServices) {}
  @Post('register')
  public async register(@Body() user: IUser): Promise<any> {
    const result: any = await this.usersServices.create(user);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }
}

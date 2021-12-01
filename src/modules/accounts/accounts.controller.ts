import { AccountsService } from './accounts.service';
import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post('/create')
  async create(@Body() body: any) {
    try {
      const result = await this.accountsService.create(body);
      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  // @Post('create-account')
  // public async register(@Body() UserId: number): Promise<any> {
  //   const result: any = await this.accountsService.create(UserId);
  //   if (!result.success) {
  //     throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
  //   }
  //   return result;
  // }
}

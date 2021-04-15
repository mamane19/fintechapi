import { Module } from '@nestjs/common';
import { AccountsModule } from '../accounts/accounts.module';
import { UsersController } from './user,controller';
import { UsersServices } from './user.service';
import { UsersProviders } from './users.provider';

@Module({
  controllers: [UsersController],
  imports: [AccountsModule],
  providers: [UsersProviders, UsersServices],
  exports: [UsersServices, UsersProviders],
})
export class UserModule {}

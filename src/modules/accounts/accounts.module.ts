import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AccountsController } from './accounts.controller';
import { AccountsProviders } from './accounts.provider';
import { AccountsService } from './accounts.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountsController],
  providers: [AccountsProviders, AccountsService],
  exports: [AccountsProviders, AccountsService],
})
export class AccountsModule {}

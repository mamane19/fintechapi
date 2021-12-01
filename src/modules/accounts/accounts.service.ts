import { Injectable, Inject } from '@nestjs/common';
import { Accounts } from './accounts.entity';

@Injectable()
export class AccountsService {
  constructor(
    @Inject('ACCOUNTS_REPOSITORY')
    private accountsRepository: typeof Accounts,
  ) {}

  public async create(account: Accounts): Promise<Accounts> {
    return this.accountsRepository.create(account);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GuestEntity } from './model/guest.entity';

@Injectable()
export class GuestService {
  constructor(
    @InjectRepository(GuestEntity)
    private readonly repo: Repository<GuestEntity>,
  ) {}

  public async getGuests(): Promise<GuestEntity[]> {
    return await this.repo.find();
  }
}

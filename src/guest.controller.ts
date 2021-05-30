import { Controller, Get } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestEntity } from './model/guest.entity';

@Controller('/guest')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Get()
  async getHello(): Promise<GuestEntity[]> {
    return this.guestService.getGuests();
  }
}

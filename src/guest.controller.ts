import { Controller, Get } from '@nestjs/common';
import { GuestEntity } from './model/guest.entity';
import { GuestService, GuestStats } from './guest.service';

@Controller('/guest')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Get()
  async getAll(): Promise<GuestEntity[]> {
    return this.guestService.getGuests();
  }

  @Get('/stats')
  async getStats(): Promise<GuestStats> {
    return this.guestService.getGuestStats();
  }
}

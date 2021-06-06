import { Body, Controller, Get, Post } from '@nestjs/common';
import { GuestEntity } from './model/guest.entity';
import { GuestService, GuestStats, GuestId } from './guest.service';

@Controller('/api/guest')
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

  @Post('/confirm')
  async confirm(@Body() guest: GuestId): Promise<GuestEntity> {
    return this.guestService.confirmGuest(guest);
  }

  @Post('/deliver')
  async deliverInvite(@Body() guest: GuestId): Promise<GuestEntity> {
    return this.guestService.deliverInvite(guest);
  }
}

import { Module } from '@nestjs/common';
import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';

@Module({
  imports: [],
  controllers: [GuestController],
  providers: [GuestService],
})
export class GuestModule {}

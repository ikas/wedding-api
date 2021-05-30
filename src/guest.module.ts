import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestService } from './guest.service';
import { GuestController } from './guest.controller';
import { GuestEntity } from './model/guest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GuestEntity])],
  providers: [GuestService],
  controllers: [GuestController],
  exports: [],
})
export class GuestModule {}

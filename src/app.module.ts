import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configService } from './config/config.service';
import { GuestModule } from './guest.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    GuestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

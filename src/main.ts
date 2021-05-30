import { NestFactory } from '@nestjs/core';
import { GuestModule } from './guest.module';

async function bootstrap() {
  const app = await NestFactory.create(GuestModule);
  await app.listen(11000);
}
bootstrap();

import { Injectable } from '@nestjs/common';

@Injectable()
export class GuestService {
  getGuests(): string[] {
    return ['Hello World!'];
  }
}

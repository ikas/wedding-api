import { HttpException, HttpStatus } from '@nestjs/common';

export class GuestNotFoundException extends HttpException {
  constructor() {
    super(`Guest not found.`, HttpStatus.NOT_FOUND);
  }
}

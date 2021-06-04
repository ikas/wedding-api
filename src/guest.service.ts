import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuestNotFoundException } from './errors/guestNotFound.exception';
import { GuestEntity } from './model/guest.entity';

export interface GuestStats {
  total: number;
  kids: number;
  delivered: number;
  percentDelivered: number;
  confirmed: number;
  percentConfirmed: number;
}

export interface GuestId {
  id?: number;
  name?: string;
}

@Injectable()
export class GuestService {
  constructor(
    @InjectRepository(GuestEntity)
    private readonly repo: Repository<GuestEntity>,
  ) {}

  public async getGuests(): Promise<GuestEntity[]> {
    return this.repo.find({ order: { id: 'ASC' } });
  }

  public async getGuestStats(): Promise<GuestStats> {
    const [total, kids, delivered, confirmed] = await Promise.all([
      this.countGuests(),
      this.countKids(),
      this.countDelivered(),
      this.countConfirmed(),
    ]);

    const percentConfirmed = confirmed / total;
    const percentDelivered = delivered / total;

    return {
      total,
      kids,
      delivered,
      percentDelivered,
      confirmed,
      percentConfirmed,
    };
  }

  public async confirmGuest(guestId: GuestId): Promise<GuestEntity> {
    let guest: GuestEntity = null;
    if (guestId.id) {
      guest = await this.repo.findOne(guestId.id);
    } else if (guestId.name) {
      guest = await this.repo.findOne({ name: guestId.name });
    }

    if (!guest) {
      throw new GuestNotFoundException();
    }

    return guest;
  }

  private async countGuests(): Promise<number> {
    return this.repo.count();
  }

  private async countKids(): Promise<number> {
    return this.repo.count({ where: { is_baby: true } });
  }

  private async countDelivered(): Promise<number> {
    return this.repo.count({ where: { invite_delivered: true } });
  }

  private async countConfirmed(): Promise<number> {
    return this.repo.count({ where: { is_confirmed: true } });
  }
}

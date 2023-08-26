import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BookstoreService {
  constructor(
    @Inject('RabbitClient') private readonly rabbitClient: ClientProxy,
  ) {}

  async getAllBooks() {
    return this.rabbitClient.send('get.books', {});
  }
}

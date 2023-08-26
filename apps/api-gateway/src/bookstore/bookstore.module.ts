import { Module } from '@nestjs/common';
import { BookstoreController } from './bookstore.controller';
import { BookstoreService } from './bookstore.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RabbitClient',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://localhost:${process.env.AMQP_PORT}`],
          queue: 'bookstore_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [BookstoreController],
  providers: [BookstoreService],
})
export class BookstoreModule {}

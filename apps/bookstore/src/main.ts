import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const logger = new Logger();
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'bookstore_queue',
        noAck: false,
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  app.listen().then(() => logger.verbose('Bookstore microservice is listen'));
}
bootstrap();

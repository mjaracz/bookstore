import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'postgresql',
        version: '5.7',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          port: parseInt(process.env.BOOK_DB_PORT),
          user: process.env.BOOK_DB_USERNAME,
          password: process.env.BOOK_BD_PASSWORD,
          database: process.env.BOOK_DB_NAME,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

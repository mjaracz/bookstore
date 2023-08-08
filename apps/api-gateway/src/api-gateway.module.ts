import { Module } from '@nestjs/common';
import { BookstoreModule } from './bookstore/bookstore.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BookstoreModule],
})
export class ApiGatewayModule {}

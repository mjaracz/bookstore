import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('bookstore')
export class BookstoreController {
  @MessagePattern('get.books')
  async getAllBooks() {

  }
}

import { Controller, Get } from '@nestjs/common';
import { BookstoreService } from './bookstore.service';

@Controller('bookstore')
export class BookstoreController {
  constructor(private readonly bookstoreService: BookstoreService) {}

  @Get('books')
  async getAllBooks() {
    return this.bookstoreService.getAllBooks();
  }
}

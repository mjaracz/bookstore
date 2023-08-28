import { Injectable } from '@nestjs/common';
import { InjectKnex } from 'nestjs-knex';
import { Knex } from 'knex';

@Injectable()
export class BaseRepository<Repository> {
  constructor(
    private readonly tableName: string,
    @InjectKnex() private readonly knex: Knex<Repository, Repository>,
  ) {}

  async findAll() {
    try {
      const tableElements = await this.knex.table(this.tableName);
      return { tableElements };
    } catch (e) {
      // TODO: implement custom logger injection here
    }
  }
}

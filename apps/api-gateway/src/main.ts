import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(3000);
}
bootstrap();

import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 8000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: [`${process.env.CLIENT_URL}`],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS',
    allowedHeaders: 'Authorization, Content-Type',
  };
  app.enableCors(corsOptions);
  app.setGlobalPrefix('api', { exclude: ['/'] });
  await app.listen(PORT);
}
bootstrap();

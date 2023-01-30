import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = Number(process.env.API_PORT);
  const app = await NestFactory.create(AppModule);

  await app.listen(port, () => {
    console.log(process.env.API_PORT);
    console.log(`App started on port ${port}`);
  });
}
bootstrap();

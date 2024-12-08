import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.IONIC_URI,process.env.NEXT_URI],
    credentials: true,
  });

  app.use(bodyParser.json({
    limit : '10mb'
  }));

  app.use(bodyParser.urlencoded({
    limit: '10mb', extended : true
  }));

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted:true,
    transform: true,
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
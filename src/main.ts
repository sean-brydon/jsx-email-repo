import { AppModule } from "./app.module";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableVersioning({
    defaultVersion: "1",
    type: VersioningType.URI,
  });

  await app.listen(process.env.PORT || 5559);
}

bootstrap();

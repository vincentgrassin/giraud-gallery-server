import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  console.log("main started");

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(4000);
}
bootstrap();

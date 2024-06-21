import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import loadConfig from "./config/app";
import { MailModule } from "./modules/mail/mail.module";
import { AppController } from "./app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [loadConfig],
    }),
    MailModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

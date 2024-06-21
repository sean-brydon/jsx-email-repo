import { Module } from "@nestjs/common";
import { MailService } from "./mail.service";
import { BullModule } from "@nestjs/bull";

@Module({
  imports: [
    BullModule.registerQueue({
      name: "emails",
    }),
  ],
  providers: [MailService],
})
export class MailModule {}

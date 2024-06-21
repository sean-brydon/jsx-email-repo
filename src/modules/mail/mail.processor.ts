import { Processor, Process } from "@nestjs/bull";
import { MailService } from "./mail.service";
import { SendMailConfiguration } from "./mail.service";
import { Job } from "bull";
import { Logger } from "@nestjs/common";

@Processor("emails")
export class EmailProcessor {
  logger = new Logger(EmailProcessor.name);

  constructor(private readonly mailService: MailService) {}

  @Process("send-email")
  async handleEmailJob(job: Job<SendMailConfiguration>) {
    const { email, subject, template } = job.data;
    this.logger.debug("started processing email job");
    await this.mailService.sendMail({ email, subject, template });
    this.logger.debug("Email job completed successfully");
  }
}

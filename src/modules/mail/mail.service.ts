import { Injectable, Logger } from "@nestjs/common";
import * as nodemailer from "nodemailer";
import { ConfigService } from "@nestjs/config";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";
import { render } from "jsx-email";

// import { render } from "jsx-email";

export interface SendMailConfiguration {
  email: string;
  subject: string;
  text?: string;
  template: any;
}

@Injectable()
export class MailService {
  logger = new Logger(MailService.name);
  private transporter: nodemailer.Transporter;

  constructor(
    private readonly configService: ConfigService,
    @InjectQueue("emails") private readonly emailQueue: Queue,
  ) {
    this.transporter = nodemailer.createTransport(
      {
        host: this.configService.get("mail.host"),
        port: this.configService.get("mail.port"),
        secure: this.configService.get("mail.secure"),
        auth: {
          user: this.configService.get("mail.user"),
          pass: this.configService.get("mail.password"),
        },
      },
      {
        from: {
          name: "Cal.com",
          address: this.configService.get("mail.from"),
        },
      },
    );
  }

  generateEmail = (template: any) => {
    return render(template);
  };

  async sendMail({ email, subject, template }: SendMailConfiguration) {
    try {
      this.logger.debug("Sending email", email);
      const html = await this.generateEmail(template);
      await this.transporter.sendMail({
        to: email,
        subject,
        html,
      });
    } catch (error) {
      this.logger.error("Error sending email", error);
    }
  }

  async sendMailToQueue(config: SendMailConfiguration) {
    await this.emailQueue.add("send-email", config);
  }
}

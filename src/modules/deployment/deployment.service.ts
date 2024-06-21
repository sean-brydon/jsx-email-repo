import { Injectable } from "@nestjs/common";
import { newKeyId } from "../../lib/newKeyId";
import { MailService } from "../mail/mail.service";

import { Template as LicenseKeySuccessEmail } from "../../../emails/LicenseKeySuccessEmail";

@Injectable()
export class DeploymentService {
  constructor(private readonly mailService: MailService) {}

  private generateSignature() {
    return newKeyId("secret", 48);
  }

  async handleCheckoutSuccess() {
    const liveKey = this.generateSignature();
    const signature = this.generateSignature();

    const html = LicenseKeySuccessEmail({
      calcomLicenseKey: liveKey,
      signatureKey: signature,
    });

    // await this.mailService.sendMailToQueue({
    //   email: "test@cal.com",
    //   subject: "Your Cal.com purchase is complete",
    //   template: html,
    // });

    await this.mailService.sendMail({
      email: "test@cal.com",
      subject: "Your Cal.com purchase is complete",
      template: html,
    });

    return "Purchase complete - check your email for the next steps";
  }
}

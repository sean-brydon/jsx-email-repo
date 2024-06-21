import { Controller, Post } from "@nestjs/common";
import { DeploymentService } from "./modules/deployment/deployment.service";

@Controller()
export class AppController {
  constructor(private readonly deploymentService: DeploymentService) {}

  @Post("send-email")
  async sendEmail() {
    await this.deploymentService.handleCheckoutSuccess();
  }
}

import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "81ec793ceb844e",
    pass: "553b69d77cb341",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Fedget <oi@fedget.com>",
      to: "Leandro Rodrigues <leandro.rodrigues00@hotmail.com>",
      subject,
      html: body,
    });
  }
}

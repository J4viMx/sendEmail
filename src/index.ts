import { Resend } from "resend";
import path from "path";
import fs from "fs";
import "dotenv/config";

const resend = new Resend(process.env.API_KEY);

const sendEmail = async () => {
  try {
    const templatePath = path.join(__dirname, "/assets/emailTemplate.html");
    const template = fs.readFileSync(templatePath, "utf-8");

    const response = await resend.emails.send({
      from: "Template <javi@javimx.com>",
      to: [`${process.env.EMAIL}`],
      subject: "Test FE Developer - Template - Javier Juárez",
      html: template,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

sendEmail();

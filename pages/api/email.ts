import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import config from '../../app.config';
import { NextApiRequest, NextApiResponse } from 'next';
import SMTPConnection from 'nodemailer/lib/smtp-connection';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import { i18n } from 'next-i18next';

interface EmailRequest {
  email: string;
  name: string;
  message: string;
  phone: string;
}

function renderHtml(
  req: NextApiRequest,
  name: string,
  email: string,
  phone: string,
  message: string
) {
  let host = req.headers.host;
  const proto = req.headers['x-forwarded-proto'];
  let url = proto + '://' + host;
  // Define the source path for the email template
  let templatePath = path.join(process.cwd(), 'resources/email_template.ejs');

  // Read the email template
  let templateString = fs.readFileSync(templatePath, 'utf-8');

  // Define the URL of the logo
  let logoSrc = url + '/images/logo.png';

  // Define the data for the email
  let emailData = {
    logoSrc,
    heading: i18n?.t('common:contract.contact-heading'),
    body: i18n?.t('common:contract.contact-body', {
      name,
      email,
      phone,
      message,
    }),
  };

  // Use EJS to render the template with the provided data
  let html = ejs.render(templateString, emailData);
  return html;
}

function validateEmailRequest(data: any): data is EmailRequest {
  return (
    typeof data === 'object' &&
    typeof data.email === 'string' &&
    data.email.length <= 256 && // Reasonable max length
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && // Basic email validation
    typeof data.name === 'string' &&
    data.name.length <= 100 && // Reasonable max length
    typeof data.message === 'string' &&
    data.message.length <= 5000 && // Limit message length
    typeof data.phone === 'string' &&
    data.phone.length <= 20 // Reasonable phone length
  );
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<any>
) {
  try {
    // Parse with a size limit to prevent DoS
    const body = request.body;
    if (typeof body !== 'string' || body.length > 10000) {
      return response.status(400).json({ error: 'Invalid request body size' });
    }

    let parsedData: unknown;
    try {
      parsedData = JSON.parse(body);
    } catch (e) {
      return response.status(400).json({ error: 'Invalid JSON format' });
    }

    // Validate the parsed data
    if (!validateEmailRequest(parsedData)) {
      return response.status(400).json({ error: 'Invalid request format' });
    }

    const { email, name, message, phone } = parsedData;

    // Additional sanitization
    const sanitizedMessage = message.slice(0, 5000); // Ensure message length
    const sanitizedName = name.slice(0, 100); // Ensure name length

    const htmlEmail = renderHtml(
      request,
      sanitizedName,
      email,
      phone,
      sanitizedMessage
    );

    const mailOptions: Mail.Options = {
      from: config.fromEmail,
      to: email,
      bcc: config.destinationEmail,
      subject: i18n?.t('common:contract.contact-heading'),
      html: htmlEmail,
    };

    const transport = nodemailer.createTransport({
      host: config.smtpServer,
      port: config.smtpPort,
      auth: {
        user: config.senderEmail,
        pass: config.senderEmailPassword,
      },
    } as SMTPConnection.Options);

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email sent');
          } else {
            reject(err.message);
          }
        });
      });

    await sendMailPromise();
    response.status(200).json({ message: 'Email sent' });
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Internal server error' });
  }
}

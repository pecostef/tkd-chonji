import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import config from '../../deployment.config';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextRequest,
  response: NextApiResponse<any>
) {
  const { email, name, message, phone } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.SENDER_EMAIL,
      pass: config.SENDER_EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: config.SENDER_EMAIL,
    to: email,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    bcc: config.DESTINATION_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

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

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

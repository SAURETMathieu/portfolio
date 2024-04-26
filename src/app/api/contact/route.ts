import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');
import z from 'zod';

const formSchema = z.object({
  lastname: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  number: z.string().nullable(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationResult = formSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Unvalid format.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        ciphers: 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-ECDSA-AES256-GCM-SHA384'
      },
    });

    const mailOptions = {
      from: process.env.MAIL,
      to: process.env.MY_MAIL,
      subject: 'Message Portfolio',
      html: `
        <p>Prénom: ${validationResult.data.firstname} ${validationResult.data.lastname}</p>
        <p>Email: ${validationResult.data.email}</p>
        <p>Tel: ${validationResult.data.number || 'Non fourni'}</p>
        <p>Message: ${validationResult.data.message}</p>
      `,
    };
    
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent !' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Oops, an error occurs, please try again later.',
      },
      { status: 500 }
    );
  }
}
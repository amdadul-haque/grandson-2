import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { fromMail, name, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'maciej.luczynski@grandson.media',
        pass: 'bscd jllh crxc wkve',
      }
    })

    const mailOption = {
      from: fromMail,
      to: "hello@grandson.media",
      subject: `${name} is looking for you.`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
            <h2 style="color: #333;">You have a new message</h2>
            <div style="background-color: #fff; padding: 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <p style="font-size: 16px; line-height: 1.6;"><strong>Name:</strong> ${name}</p>
                <p style="font-size: 16px; line-height: 1.6;"><strong>Email:</strong> ${fromMail}</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 16px; line-height: 1.6;">${message}</p>
            </div>
        </div>
    `
    };


    await transporter.sendMail(mailOption)
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}
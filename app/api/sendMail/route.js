import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { fromMail, name, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // host: 'smtpro.zoho.in',
      // port: 465,
      // secure: true,
      auth: {
        // user: 'amdadul1807107@gmail.com',
        // pass: 'ctyplxmrxbcoasox',
        user: 'maciej.luczynski@grandson.media',
        pass: 'bscd jllh crxc wkve',
        // user: process.env.NODEMAILER_EMAIL,
        // pass: process.env.NODEMAILER_PW,
      }
    })

    const mailOption = {
      from: fromMail,
      // to: "hello@grandson.media",
      to: "haque1807107@stud.kuet.ac.bd",
      subject: `${name} is looking for you.`,
      html: `
        <h3>You have a new message from ${fromMail}</h3>
        <p>${message}</p>
        `
    }

    await transporter.sendMail(mailOption)
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}
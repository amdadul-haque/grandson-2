import nodemailer from "nodemailer";

// we need to send contact data as json format

export async function POST(req, res) {
  const response = await req.json();
  console.log("response", response);
  // return Response.json({ response });
  const { name, email, country, mobile, business, product, message, budget } =
    response;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kalamasud795@gmail.com",
      pass: "wxyd uhvf eynr bagj",
    },
  });
  // console.log("transporter", transporter);
  const mailOptions = {
    from: "abusaidshabib712@gmail.com",
    to: email, // replace this with the receiver's email
    subject: "New Inquiry from " + name,
    text: `
    Name: ${name}
    Email: ${email}
    Country: ${country}
    Mobile: ${mobile}
    Business: ${business}
    Product: ${product}
    Message: ${message}
    Budget: ${budget}
    `,
  };
  // console.log("mailOptions", mailOptions);
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    // res.status(200).json({ message: "Email sent successfully" });
    return Response.json({ info });
  } catch (error) {
    console.error("Error sending email:", error);
    // res.status(500).json({ error: "Failed to send email" });
    return Response.json({ error });
  }
}

let nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject:string, otpText:string) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    subject: subject,
    text: otpText,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err:any, response:any) => {
      if (err) {
        throw new Error(err.name);
      } else {
        console.log("Email Sent");
        return true;
      }
    });
  });
}
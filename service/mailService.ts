var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject:string, otpText:string) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    subject: subject,
    text: otpText,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err:any, response:any) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
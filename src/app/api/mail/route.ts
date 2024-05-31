'use server'

import { sendMail } from "../../../../service/mailService";

export async function POST(req:any) {   
  const formData = await req.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')
  try {
    await sendMail(
      "FROM YOUR WEB",
      `name : ${name}
       email : ${email}
       message : ${message}
      `
    );
    return new Response("", {
      status: 200,
      statusText:'success, wait Nick to check his email box',
  })}catch (err:any) {
    console.log(err)
    return new Response("", {
      status: 400,
      statusText:'failed, contact Nick to fix it!',
    })
  }
}


export async function GET(req: any) {
  return new Response("Hello", {
      status: 200
  })
}

export async function PUT (req:any, res:any) {   
  try {
    const { method } = req;
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }catch (err:any) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
}

export async function DELETE(req:any, res:any) {   
  try {
    const { method } = req;
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }catch (err:any) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
}
import { sendMail } from "../../../../service/mailService";
import { NextApiRequest,NextApiResponse } from "next";

export async function POST(req:NextApiRequest, res:NextApiResponse) {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          "TEST",
          "THI IS A TEST FOR MY MEDIUM USERS"
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (error:any) {
    res.status(400).json({
      error_code: "api_one",
      message: error.message,
    });
  }
};

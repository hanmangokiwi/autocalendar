// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getAccessToken, getSession, withApiAuthRequired} from "@auth0/nextjs-auth0";
import OwnsRecord from "./middleware/OwnsRecord";

type Data = {
  name: string
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const { accessToken } = await getAccessToken(req, res);
//
//
//   res.status(200).json({ name: 'John Doe' })
// }

export default withApiAuthRequired(async (req, res) => {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const session = await getSession(req, res);
    console.log(accessToken);
    console.log(session?.user);
    return "hi";


  } catch(error) {
    console.error(error)
    res.status(200).json({ name: 'John Doe' })
  }
});
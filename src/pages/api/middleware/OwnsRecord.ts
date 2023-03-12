import {getAccessToken, getSession, withApiAuthRequired} from "@auth0/nextjs-auth0";
import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";

const OwnsRecord = (handler: any) => withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
        const session = await getSession(req, res);

        const { id } = req.body;


        console.log(session?.user);
        try {

            if (session?.user.sub !== id) {
                return res.status(404).json({message: "Record not found"});
            }
            return handler;
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: "Something went wrong"});
        }
    }
);

export default OwnsRecord;
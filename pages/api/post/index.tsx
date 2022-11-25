import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";
import { allPostsQuery } from "../../../utils/queries";
import { StatusCodes } from 'http-status-codes';
type Data = {
    msg:string
}

export default async function handler (
    req:NextApiRequest,
    res:NextApiResponse<Data>
) {
    res.status(StatusCodes.OK).json({ msg : 'Response was successful'});
    if(req.method === 'GET') {
        const query = allPostsQuery();

        const data = await client.fetch(query)
        res.status(StatusCodes.OK).json(data);
    }
}
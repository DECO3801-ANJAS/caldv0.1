import { NextApiRequest, NextApiResponse } from "next";
import IEvent from "../../../interfaces/event";
import IEvents from "../../../interfaces/events";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IEvents>
) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const events = (await db
      .collection("events")
      .find({})
      .limit(10)
      .toArray()) as IEvent[];

    res.status(200).json({ events });
  } catch (e) {
    console.error(e);
  }
}

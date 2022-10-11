import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import IEvent from "../../../../interfaces/models/event";
import IErrorResponse from "../../../../interfaces/responses/error";
import IEventResponse from "../../../../interfaces/responses/eventResponse";
import clientPromise from "../../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IErrorResponse | IEventResponse>
) {
  const { event_id } = req.query;
  try {
    const _id = new ObjectId(event_id as string);
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const event = await db.collection<IEvent>("events").findOne({ _id });

    if (!event) {
      res.status(404).json({ error: "not found" });
    } else {
      res.status(200).json({ event });
    }
  } catch (e) {
    res.status(500).json({ error: "failed to load data" });
  }
}

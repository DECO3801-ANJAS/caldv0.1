import { NextApiRequest, NextApiResponse } from "next";
import IEvent from "../../../interfaces/models/event";
import IErrorResponse from "../../../interfaces/responses/error";
import IEventsResponse from "../../../interfaces/responses/eventsResponse";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IEventsResponse | IErrorResponse>
) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const events = (await db
      .collection("events")
      .find({})
      .limit(10)
      .toArray()) as IEvent[];

    res.status(200).json({ events });
  } catch (e) {
    res.status(500).json({ error: "failed to load data" });
  }
}

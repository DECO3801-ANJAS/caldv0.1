import { NextApiRequest, NextApiResponse } from "next";
import useSWR from "swr";
import { useRouter } from "next/router";
import IEvent from "../../../interfaces/models/event";
import IErrorResponse from "../../../interfaces/responses/error";
import IEventsResponse from "../../../interfaces/responses/eventsResponse";
import clientPromise from "../../../lib/mongodb";

const fetcher = (url: string) => fetch(url).then(res => res.json())
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IEventsResponse | IErrorResponse>
) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const { data: responseDetail, error } = useSWR('api/events', fetcher,
    { refreshInterval: 30000 }
  )

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

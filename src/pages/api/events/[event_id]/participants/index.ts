import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import IParticipantsResponse from "../../../../../interfaces/responses/participantsResponse";
import clientPromise from "../../../../../lib/mongodb";
import IErrorResponse from "../../../../../interfaces/responses/error";
import ICreateParticipantRequest from "../../../../../interfaces/requests/createParticipantRequest";
import IParticipant from "../../../../../interfaces/models/participant";
import IParticipantResponse from "../../../../../interfaces/responses/participantResponse";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    IParticipantsResponse | IErrorResponse | IParticipantResponse
  >
) {
  const { method, query, body } = req;
  const { event_id, task } = query;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const queryTask = task;

    switch (method) {
      case "GET":
        const getParticipants = queryTask
          ? await db
              .collection<IParticipant>("participants")
              .find({
                eventId: new ObjectId(event_id as string),
                task: queryTask,
              })
              .toArray()
          : await db
              .collection<IParticipant>("participants")
              .find({ eventId: new ObjectId(event_id as string) })
              .toArray();
        res.status(200).json({ participants: getParticipants });
        break;

      case "POST":
        if (!body) {
          res.status(400).json({ error: "request body not provided" });
        }
        const { name, task, experience }: ICreateParticipantRequest = body;
        const participantData = {
          _id: new ObjectId(),
          eventId: new ObjectId(event_id as string),
          task,
          experience,
          name,
        };
        const postParticipant = await db
          .collection<IParticipant>("participants")
          .insertOne(participantData);
        postParticipant.acknowledged
          ? res.status(200).json({ participant: participantData })
          : res.status(500).json({ error: "failed to create participant " });
        break;

      default:
        res.status(405).json({ error: "method not allowed" });
    }
  } catch (e) {
    res.status(500).json({ error: "failed to load data" });
  }
}

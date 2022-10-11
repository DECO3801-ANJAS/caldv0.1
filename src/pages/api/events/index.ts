import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import IEvent from "../../../interfaces/models/event";
import IErrorResponse from "../../../interfaces/responses/error";
import IEventsResponse from "../../../interfaces/responses/eventsResponse";
import clientPromise from "../../../lib/mongodb";
import ICreateEventRequest from "../../../interfaces/requests/createEventRequest";
import IRecipe from "../../../interfaces/models/recipe";
import IEventResponse from "../../../interfaces/responses/eventResponse";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IEventsResponse | IErrorResponse | IEventResponse>
) {
  const { body, method } = req;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    switch (method) {
      case "GET":
        const getEvents = await db
          .collection<IEvent>("events")
          .find({})
          .limit(10)
          .toArray();
        res.status(200).json({ events: getEvents });
        break;

      case "POST":
        if (!body) {
          res.status(400).json({ error: "request body not provided" });
        }
        const {
          title,
          description,
          location,
          recipeIngredients,
          recipeSteps,
          date,
        }: ICreateEventRequest = body;
        const recipeData: IRecipe = { recipeIngredients, recipeSteps };
        const eventData = {
          _id: new ObjectId(),
          title,
          description,
          location,
          date: new Date(date as string),
          recipe: recipeData,
        };
        const postEvent = await db
          .collection<IEvent>("events")
          .insertOne(eventData);
        postEvent.acknowledged
          ? res.status(200).json({ event: eventData })
          : res.status(500).json({ error: "failed to create event" });
        break;

      default:
        res.status(405).json({ error: "method not allowed" });
    }
  } catch (e) {
    res.status(500).json({ error: "failed to load data" });
  }
}

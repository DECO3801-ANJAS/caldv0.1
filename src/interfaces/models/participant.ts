import { ObjectId } from "mongodb";

interface IParticipant {
  _id: ObjectId;
  eventId: ObjectId;
  task: string;
  name: string;
  experience: "beginner" | "intermediate" | "expert";
}

export default IParticipant;

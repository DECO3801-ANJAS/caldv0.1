import { ObjectId } from "mongodb";

interface ICreateParticipantRequest {
  name: string;
  task: string;
  experience: "beginner" | "intermediate" | "expert";
}

export default ICreateParticipantRequest;

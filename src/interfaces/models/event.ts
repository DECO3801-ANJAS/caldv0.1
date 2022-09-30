import { ObjectId } from "mongodb";

interface IEvent {
  _id: ObjectId;
  name: String;
  description: String;
  date: Date;
}

export default IEvent;

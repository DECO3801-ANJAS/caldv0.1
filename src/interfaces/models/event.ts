import { ObjectId } from "mongodb";
import IFile from "./file";
import IRecipe from "./recipe";

interface IEvent {
  _id: ObjectId;
  title: String;
  description: String;
  location: String;
  recipe: IRecipe;
  date: Date;
  images?: IFile[];
}

export default IEvent;

import { ObjectId } from "mongodb";
import IFile from "./file";
import IRecipe from "./recipe";

interface IEvent {
  _id: ObjectId;
  title: string;
  description: string;
  location: string;
  recipe: IRecipe;
  date: Date;
  images?: IFile[];
}

export default IEvent;

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
  tasks: string[];
  images?: IFile[];
}

export default IEvent;

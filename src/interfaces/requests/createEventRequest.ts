import IFile from "../models/file";

interface ICreateEventRequest {
  title: string;
  description: string;
  location: string;
  recipeIngredients: string;
  recipeSteps: string;
  date: string;
  images?: IFile[];
}

export default ICreateEventRequest;

import IFile from "../models/file";

interface ICreateEventRequest {
  title: string;
  description: string;
  location: string;
  recipeIngredients: string;
  recipeSteps: string;
  date: string;
  tasks: string[];
  images?: string[];
}

export default ICreateEventRequest;

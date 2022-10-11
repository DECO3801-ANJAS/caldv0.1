import IFile from "../models/file";

interface ICreateEventRequest {
  title: String;
  description: String;
  location: String;
  recipeIngredients: String;
  recipeSteps: String;
  date: String;
  images?: IFile[];
}

export default ICreateEventRequest;

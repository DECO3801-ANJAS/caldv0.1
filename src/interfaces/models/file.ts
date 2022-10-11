import { Binary } from "mongodb";

interface IFile extends File, Binary {
  preview?: string;
}

export default IFile;

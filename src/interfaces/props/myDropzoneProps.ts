import React from "react";
import IFile from "../models/file";


interface IDropzone {
  files: IFile[];
  setFiles: React.Dispatch<React.SetStateAction<IFile[]>>
}

export default IDropzone;
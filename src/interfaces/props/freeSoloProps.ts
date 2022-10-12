import React from "react";

interface IFreeSolo {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  errorMessage: boolean
}

export default IFreeSolo;
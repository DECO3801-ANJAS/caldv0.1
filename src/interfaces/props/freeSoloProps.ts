import React from "react";

interface IFreeSolo {
  inputValue: string;
  handleChangeTask: (event: React.SyntheticEvent<Element, Event>, newInputValue: string) => void
  errorMessage: boolean
  options:string[]
  addNewTask: () => void
  forJoin: boolean
}

export default IFreeSolo;
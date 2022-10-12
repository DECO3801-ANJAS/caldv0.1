interface IFormSnackbarProps {
    state:boolean,
    message:string,
    error:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
  }
  
  export default IFormSnackbarProps;
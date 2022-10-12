import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import IFreeSolo from '../interfaces/props/freeSoloProps';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: "#784CF4",
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: "#784CF4",
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: "#784CF4",
    },
    '&:hover fieldset': {
      borderColor: "#784CF4",
    },
    '&.Mui-focused fieldset': {
      borderColor: "#784CF4",
    },
  },
});

export default function FreeSolo({inputValue, errorMessage, handleChangeTask}: IFreeSolo) {
  return (
      <Autocomplete
      inputValue={inputValue}
        onInputChange={handleChangeTask}
        id="tasks"
        freeSolo
        options={tasks.map((option) => option.title)}
        renderInput={(params) => <CssTextField 
          {...params}
          focused 
          label="Tasks"
          error={!!errorMessage}
          helperText={!!errorMessage && "Tasks is required"}
          />}
      />
  );
}

// TODO: Get some pre-defined tasks here
const tasks = [
  {title: 'Frying'},
  {title: 'Grilling'},
  {title: 'Prepping'},
  {title: 'Cooking'}
];

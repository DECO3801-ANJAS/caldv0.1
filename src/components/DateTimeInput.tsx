import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Grid } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import IBasicDatePicker from "../interfaces/props/basicDatePickerProps";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#784CF4",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#784CF4",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#784CF4",
      },
      "&:hover fieldset": {
        borderColor: "#784CF4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#784CF4",
      },
    },
  },
})(TextField);


// Function to return date and time input field
// Input : 
//        setTimeFunc, React.useState(dayjs | null) function
//        setDateFunc, React.useState(dayjs | null) function
//        date, React.useState(dayjs | null)
//        time, React.useState(dayjs | null)
//        errorMessageDate, boolean
//        errorMessageTime, boolean
// return JSX element
export default function BasicDatePicker({
  setTimeFunc,
  setDateFunc,
  date,
  time,
  errorMessageDate,
  errorMessageTime,
}: IBasicDatePicker) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid item xs={6}>
        <DatePicker
          label="Date"
          value={date}
          inputFormat="DD/MM/YYYY"
          onChange={setDateFunc}
          renderInput={(params) => (
            <CssTextField
              {...params}
              fullWidth
              name="date"
              focused
              error={!!errorMessageDate}
              helperText={!!errorMessageDate && "Date is required, in DD/MM/YYYY and must be after today"}
              data-testid='date-input-in-create-event-page'
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <TimePicker
          label="Time"
          value={time}
          onChange={setTimeFunc}
          renderInput={(params) => (
            <CssTextField
              {...params}
              fullWidth
              focused
              error={Boolean("jenky")}
              data-testid='time-input-in-create-event-page'
              helperText={!!errorMessageTime && "Time is required"}
            />
          )}
        />
      </Grid>
    </LocalizationProvider>
  );
}

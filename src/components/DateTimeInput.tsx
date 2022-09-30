import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Grid, Box } from '@mui/material';

export default function BasicDatePicker() {
    const [date, setDate] = React.useState<Dayjs | null>(null);
    const [time, setTime] = React.useState<Dayjs | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={{ xs:1, md:0 }} justifyContent="space-between" alignItems="center">
        <Grid item xs={6}>
            <DatePicker
            label="Date"
            value={date}
            onChange={(newValue) => {
                setDate(newValue);
            }}
            renderInput={(params) => <TextField focused color="secondary" {...params} />}
            />        
        </Grid>
        <Grid item xs={6}>
        <TimePicker
            label="Time"
            value={time}
            onChange={setTime}
            renderInput={(params) => <TextField focused color="secondary" {...params} />}
        />
        </Grid>
        </Grid>
    </LocalizationProvider>
  );
}

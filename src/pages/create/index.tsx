import type { NextPage } from "next";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dropzone from "../../components/Dropzone";
import BasicDatePicker from "../../components/DateTimeInput";
import FreeSolo from "../../components/AutoComplete";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Dayjs } from "dayjs";
import IconButton from "@mui/material/IconButton";
import IFile from "../../interfaces/models/file";
import ArrowBack from "../../components/ArrowBack";

const theme = createTheme({
  palette: {
    primary: {
      main: "#784CF4",
    },
  },
});

const CssTextField = styled(TextField)({
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
});

const Create: NextPage = () => {
  // Event Details
  const [eventDetails, setEventDetails] = React.useState({
    title: "",
    description: "",
    location: "",
    recipeIngridients: "",
    recipeSteps: "",
  });

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setEventDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Date and Time
  const [date, setDate] = React.useState<Dayjs | null>(null);
  const handleChangeDate = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  const [time, setTime] = React.useState<Dayjs | null>(null);
  const handleChangeTime = (newValue: Dayjs | null) => {
    setTime(newValue);
  };

  // Tasks
  const [taskInputValue, setTaskInputValue] = React.useState("");
  const [arrayOfTasks, addTask] = React.useState([] as string[]);

  const handleDelete = (taskTag: String) => {
    addTask((arrayOfTasks) =>
      arrayOfTasks.filter((taskInputValue) => taskInputValue !== taskTag)
    );
  };

  const newTask = () => {
    addTask((arrayOfTasks) => arrayOfTasks.concat(taskInputValue));
    setTaskInputValue("");
  };

  const Tasks = arrayOfTasks.map((h: string, i: number) => (
    <Grid item xs={4} sm={2} key={i}>
      <Chip size="medium" label={h} onDelete={() => handleDelete(h)} />
    </Grid>
  ));

  // Images
  const [files, setFiles] = React.useState<IFile[]>([]);

  // Build form data
  const buildFormData = () => {
    const dateString = date!.format().split("T")[0];

    const timeString = time!.format().split("T")[1];

    const dateTime = new Date(dateString.concat("T").concat(timeString));

    const eventJson = {
      ...eventDetails,
      dateTime: dateTime,
      tasks: [...arrayOfTasks],
    };

    const data = new FormData();
    const eventBlob = new Blob([JSON.stringify(eventJson)], {
      type: "application/json",
    });

    data.append("event", eventBlob);
    files.forEach((value, i) => {
      data.append(`image${i}`, value);
    });
    return data;
  };

  const handleSubmit = () => {
    // TODO: Implement submission here
    const eventData = buildFormData();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          style={{ padding: "1rem" }}
        >
          <Grid item>
            <ArrowBack href={"/"} />
          </Grid>
          <Grid item>
            <Grid item>
              <Typography
                fontFamily="Open Sans"
                style={{ fontSize: 16, textAlign: "right", fontWeight: "600" }}
              >
                Create a
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Open Sans"
                style={{ fontSize: 20, textAlign: "right", fontWeight: "bold" }}
              >
                New Event
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ padding: "1rem" }}>
          <Grid item xs={12}>
            <CssTextField
              label="Title"
              name="title"
              onChange={handleChangeEvent}
              focused
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              label="Description"
              name="description"
              onChange={handleChangeEvent}
              focused
              rows={5}
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              label="Location"
              name="location"
              onChange={handleChangeEvent}
              focused
              fullWidth
            />
          </Grid>

          <BasicDatePicker
            setDateFunc={handleChangeDate}
            setTimeFunc={handleChangeTime}
            time={time}
            date={date}
          />

          <Grid item xs={12}>
            <Grid container spacing={1}>
              {arrayOfTasks.length > 0 ? Tasks : ""}
            </Grid>
          </Grid>
          <Grid item xs={10} sm={11}>
            <FreeSolo
              inputValue={taskInputValue}
              setInputValue={setTaskInputValue}
            />
          </Grid>
          <Grid item xs={2} sm={1}>
            <IconButton
              color="primary"
              component="label"
              onClick={taskInputValue.length !== 0 ? newTask : () => {}}
            >
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              label="Recipe Ingridients"
              name="recipeIngridients"
              onChange={handleChangeEvent}
              focused
              fullWidth
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              label="Recipe Steps"
              name="recipeSteps"
              onChange={handleChangeEvent}
              focused
              fullWidth
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12}>
            <Dropzone files={files} setFiles={setFiles} />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Create;

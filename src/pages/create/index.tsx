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
import dayjs, { Dayjs } from "dayjs";
import IconButton from "@mui/material/IconButton";
import IFile from "../../interfaces/models/file";
import ArrowBack from "../../components/ArrowBack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { axiosFormData } from "../../components/axiosInstance";
import { useRouter } from "next/router";
import FormSnackbar from "../../components/FormSnackbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#784CF4",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Mohave", "sans-serif"].join(","),
    body1: {
      fontWeight: 750,
      fontSize: "200%",
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

  // Constrain to check if the screen is small
  const isXXS = useMediaQuery("(max-width:900px)");
  const router = useRouter();

  //Error Message
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState({
    title: false,
    description: false,
    location: false,
    recipeIngredients: false,
    recipeSteps: false,
    tasks: false,
    date: false,
    time: false,
  });

  // Event Details
  const [eventDetails, setEventDetails] = React.useState({
    title: "",
    description: "",
    location: "",
    recipeIngredients: "",
    recipeSteps: "",
  });

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setEventDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMessage((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Date and Time
  const [date, setDate] = React.useState<Dayjs | null>(null);
  const handleChangeDate = (newValue: Dayjs | null) => {
    setDate(newValue);
    setErrorMessage((prev) => ({
      ...prev,
      date: false,
    }));
  };

  const [time, setTime] = React.useState<Dayjs | null>(null);
  const handleChangeTime = (newValue: Dayjs | null) => {
    setTime(newValue);
    setErrorMessage((prev) => ({
      ...prev,
      time: false,
    }));
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
    setErrorMessage((prev) => ({
      ...prev,
      tasks: false,
    }));
  };

  const handleChangeTask = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setTaskInputValue(newInputValue);
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
      date: dateTime,
      tasks: [...arrayOfTasks],
      images: files,
    };

    return eventJson;
  };

  const handleSubmit = () => {

    // Check for empty fields(except for image field)
    if (eventDetails.title == "") {
      setOpen(true);
      setError(true);
      setErrorMessage((prev) => ({
        ...prev,
        title: true,
      }));
    } else if (eventDetails.description == "") {
      setOpen(true);
      setError(true);
      setErrorMessage((prev) => ({
        ...prev,
        description: true,
      }));
    } else if (eventDetails.location == "") {
      setOpen(true);
      setError(true);
      setErrorMessage((prev) => ({
        ...prev,
        location: true,
      }));
    } else if (!date) {
      setOpen(true);
      setError(true);
      setErrorMessage((prev) => ({
        ...prev,
        date: true,
      }));
    } else if (!time) {
      setOpen(true);
      setError(true);
      setErrorMessage((prev) => ({
        ...prev,
        time: true,
      }));
    } else if (arrayOfTasks.length == 0) {
      setOpen(true);
      setError(true);
      setErrorMessage((prev) => ({
        ...prev,
        tasks: true,
      }));
    } else if (eventDetails.recipeIngredients == "") {
      setOpen(true);
      setError(true);
      setErrorMessage((prev) => ({
        ...prev,
        recipeIngredients: true,
      }));
    } else if (eventDetails.recipeSteps == "") {
      setOpen(true);
      setError(true);
      setErrorMessage((prev) => ({
        ...prev,
        recipeSteps: true,
      }));
      // check if date is valid
    } else if (!date?.isValid() || date.isBefore(dayjs())) {
      setOpen(true);
      setError(true);
      setErrorMessage((prev) => ({
        ...prev,
        date: true,
      }));
    } else {
      const eventData = buildFormData();
      axiosFormData.post("/api/events", eventData).then((res) => {
        console.log(res);
        setOpen(true);
        setError(false);
        router.push(`event/`);
      });
    }
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
      </ThemeProvider>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ padding: "1rem" }}
      >
        <Grid
          item
          xs={3}
          style={
            isXXS
              ? { marginTop: "2%", marginBottom: "5%", display: "none" }
              : { marginTop: "2%", marginBottom: "5%" }
          }
        >
          <ThemeProvider theme={theme}>
            <Typography fontFamily="sans-serif">TITLE</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={7}>
          <CssTextField
            label="Title"
            name="title"
            onChange={handleChangeEvent}
            focused
            fullWidth
            error={!!errorMessage.title}
            helperText={!!errorMessage.title && "Title is required"}
          />
        </Grid>
        <Grid
          item
          xs={3}
          style={
            isXXS
              ? { marginTop: "2%", marginBottom: "5%", display: "none" }
              : { marginTop: "2%", marginBottom: "5%" }
          }
        >
          <ThemeProvider theme={theme}>
            <Typography fontFamily="sans-serif">DESCRIPTION</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={7}>
          <CssTextField
            label="Description"
            name="description"
            onChange={handleChangeEvent}
            focused
            rows={5}
            multiline
            fullWidth
            error={!!errorMessage.description}
            helperText={!!errorMessage.description && "Description is required"}
          />
        </Grid>
        <Grid
          item
          xs={3}
          style={
            isXXS
              ? { marginTop: "2%", marginBottom: "5%", display: "none" }
              : { marginTop: "2%", marginBottom: "5%" }
          }
        >
          <ThemeProvider theme={theme}>
            <Typography fontFamily="sans-serif">LOCATION</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={7}>
          <CssTextField
            label="Location"
            name="location"
            onChange={handleChangeEvent}
            focused
            fullWidth
            error={!!errorMessage.location}
            helperText={!!errorMessage.location && "Location is required"}
          />
        </Grid>

        <Grid
          item
          xs={3}
          style={
            isXXS
              ? { marginTop: "2%", marginBottom: "5%", display: "none" }
              : { marginTop: "2%", marginBottom: "5%" }
          }
        >
          <ThemeProvider theme={theme}>
            <Typography fontFamily="sans-serif">TIME</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container spacing={1}>
            <BasicDatePicker
              setDateFunc={handleChangeDate}
              setTimeFunc={handleChangeTime}
              time={time}
              date={date}
              errorMessageDate={errorMessage.date}
              errorMessageTime={errorMessage.time}
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={3}
          style={
            isXXS
              ? { marginTop: "2%", marginBottom: "5%", display: "none" }
              : { marginTop: "2%", marginBottom: "5%" }
          }
        >
          <ThemeProvider theme={theme}>
            <Typography fontFamily="sans-serif">TASKS</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {arrayOfTasks.length > 0 ? Tasks : ""}
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <FreeSolo
                inputValue={taskInputValue}
                handleChangeTask={handleChangeTask}
                errorMessage={errorMessage.tasks}
                options={[]}
                addNewTask={newTask}
                forJoin={false}
              />
            </Grid>
            <Grid item xs={2}>
              <ThemeProvider theme={theme}>
                <IconButton
                  color="primary"
                  component="label"
                  onClick={taskInputValue.length !== 0 ? newTask : () => { }}
                >
                  <AddCircleOutlineIcon fontSize="large" />
                </IconButton>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          style={
            isXXS
              ? { marginTop: "2%", marginBottom: "5%", display: "none" }
              : { marginTop: "2%", marginBottom: "5%" }
          }
        >
          <ThemeProvider theme={theme}>
            <Typography fontFamily="sans-serif">RECIPE INGREDIENTS</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={7}>
          <CssTextField
            label="Recipe Ingredients"
            name="recipeIngredients"
            onChange={handleChangeEvent}
            focused
            fullWidth
            multiline
            rows={5}
            error={!!errorMessage.recipeIngredients}
            helperText={
              !!errorMessage.recipeIngredients &&
              "Recipe Ingredients is required"
            }
          />
        </Grid>
        <Grid
          item
          xs={3}
          style={
            isXXS
              ? { marginTop: "2%", marginBottom: "5%", display: "none" }
              : { marginTop: "2%", marginBottom: "5%" }
          }
        >
          <ThemeProvider theme={theme}>
            <Typography fontFamily="sans-serif">RECIPE STEPS</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={7}>
          <CssTextField
            label="Recipe Steps"
            name="recipeSteps"
            onChange={handleChangeEvent}
            focused
            fullWidth
            multiline
            rows={5}
            error={!!errorMessage.recipeSteps}
            helperText={
              !!errorMessage.recipeSteps && "Recipe Steps is required"
            }
          />
        </Grid>
        <Grid
          item
          xs={3}
          style={
            isXXS
              ? { marginTop: "2%", marginBottom: "5%", display: "none" }
              : { marginTop: "2%", marginBottom: "5%" }
          }
        >
          <ThemeProvider theme={theme}>
            <Typography fontFamily="sans-serif">IMAGES</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={7}>
          <Dropzone files={files} setFiles={setFiles} />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>

      {!!error ? (
        <FormSnackbar
          error={error}
          state={open}
          message={"Failed to Submit"}
          setOpen={setOpen}
        />
      ) : (
        <FormSnackbar
          error={error}
          state={open}
          message={"Event Added"}
          setOpen={setOpen}
        />
      )}
    </>
  );
};

export default Create;

import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Task from "../components/Task.component";
import Router from "next/router";
const theme = createTheme();

const Home = () => {
  const [tasks, settasks] = useState(null);

  useEffect(() => {
    if (tasks === null) getTasks();
    if (sessionStorage.getItem("token") === null) Router.push("/signin");
    console.log(sessionStorage.getItem("expirationDate"));
    if (
      sessionStorage.getItem("expirationDate") === null ||
      sessionStorage.getItem("expirationDate") < Date.now()
    ) {
      Router.push("/signin");
    }
  });

  function getTasks() {
    fetch("http://localhost:8081/api/v2/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((datas) => {
        settasks(datas);
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Tasks
          </Typography>
          {tasks !== null ? (
            tasks.map((task) => <Task key={task.id} data={task} />)
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Home;

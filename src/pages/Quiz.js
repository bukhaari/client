import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import QuizForm from "../components/QuizForm";
import Page from "../components/Page";

const Quiz = () => {
  return (
    <Page title="Dashboard: Blog | Minimal-UI">
      <Container>
        <Box mt={2}>
          <Typography variant="h5">Build New Quiz</Typography>
        </Box>
        <Box mt={2}>
          <QuizForm />
        </Box>
      </Container>
    </Page>
  );
};

export default Quiz;

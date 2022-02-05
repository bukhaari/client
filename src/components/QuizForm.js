import React from "react";
import { FieldArray, Form, Formik, insert } from "formik";
import { Button, Grid, Typography, Box } from "@mui/material";
import Textfield from "./FormUi/Textfield";
import Select from "./FormUi/Select";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const InitialValues = {
  sujectName: "",
  questions: [
    // { type: "", text: "", answers: [{ answer: "", isCorrect: "" }] }
  ],
};

const QuizForm = () => {
  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
        <Form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Textfield
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                name="sujectName"
                label="Subject Name"
              />
            </Grid>

            <Grid container item xs={12}>
              <FieldArray name="questions">
                {({ push, remove }) => (
                  <Grid item xs={12}>
                    {values.questions.map((question, index) => (
                      <Grid container spacing={1} item key={index} mt={1}>
                        <Grid item xs={12}>
                          <Typography>Question</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Select
                            type="text"
                            name={`questions[${index}].type`}
                            label="Type"
                            options={["Circle", "plank space"]}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Textfield
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name={`questions[${index}].marks`}
                            label="Marks"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Textfield
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name={`questions[${index}].text`}
                            label="Question text"
                          />
                        </Grid>

                        <Grid container item xs={12}>
                          <Typography>Answers</Typography>
                          <Answers
                            name={`questions[${index}].answers`}
                            question={question}
                          />
                        </Grid>

                        <Grid container item xs={6}>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => remove(index)}
                          >
                            remove question
                          </Button>
                        </Grid>
                      </Grid>
                    ))}
                    <Box mt={2}>
                      <Button
                        variant="contained"
                        onClick={() =>
                          push({
                            type: "",
                            text: "",
                            marks: "",
                            answers: [],
                          })
                        }
                      >
                        Add question
                      </Button>
                    </Box>
                  </Grid>
                )}
              </FieldArray>

            </Grid>
            <Grid item xs={12}>
<Button type="submit" variant="contained">Submit</Button>
            </Grid>
          </Grid>
          {/* <pre>{JSON.stringify({ values }, null, 4)}</pre> */}
        </Form>
      )}
    </Formik>
  );
};

const Answers = ({ question, name }) => (
  <FieldArray name={name}>
    {({ push, remove, insert }) => (
      <Grid item xs={12}>
        {question.answers.length ? (
          question.answers.map((ans, index) => (
            <Grid container spacing={2} item key={index}>
              <Grid item xs={6}>
                <Textfield
                  type="text"
                  name={`${name}[${index}].answer`}
                  label="Subject Name"
                />
              </Grid>
              <Grid item xs={2}>
                <Select
                  name={`${name}[${index}].isCorrect`}
                  label="Type"
                  options={{
                    1: "ture",
                    2: "false",
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <IconButton
                  color="primary"
                  component="span"
                  onClick={() => remove(index)}
                >
                  <RemoveIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  component="span"
                  onClick={() => push({ answer: "", isCorrect: "" })}
                >
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))
        ) : (
          <Box mt={2}>
            <Button
              variant="contained"
              onClick={() => push({ answer: "", isCorrect: "" })}
            >
              Add a answer
            </Button>
          </Box>
        )}
      </Grid>
    )}
  </FieldArray>
);

export default QuizForm;

import React from "react";
import { useStyles } from "./useStyles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

export const ListPeople = ({ peopleData }) => {
  const classes = useStyles();

  return peopleData.map((person, ind) => (
    <Grid
      className={classes.wrapper}
      container
      spacing={0}
      alignContent="center"
      justify="center"
      key={person.name + ind}
    >
      <Grid item xs={5}>
        <Card>
          <CardContent>
            <Typography
              className={classes.title}
              color="textPrimary"
              variant="h5"
              gutterBottom
            >
              {person.name} {person.lastname}
            </Typography>
            <Typography
              className={classes.data}
              color="textSecondary"
              gutterBottom
            >
              Возраст: {person.age}
            </Typography>
            <Typography
              className={classes.data}
              color="textSecondary"
              gutterBottom
            >
              Пол: {person.sex === "m" ? "мужской" : "женский"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ));
};

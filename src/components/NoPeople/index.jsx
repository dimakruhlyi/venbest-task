import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

export const NoPeople = () => {
  return (
    <Grid container direction="column" alignContent="center" justify="center">
      <Grid item>
        <Card>
          <CardContent>
            <Typography align="center" variant="h5">
              No People Found
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

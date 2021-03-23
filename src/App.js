import React, { useEffect } from "react";
import classes from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  Card,
  Typography,
  CardContent,
} from "@material-ui/core";
import { ListPeople } from "./components/ListPeople";
import { getPeople } from "./store/actions/peopleAction";

function App() {
  const dispatch = useDispatch();
  const { people, loading, error } = useSelector((state) => state.peopleList);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={classes.loaderCenter}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            {error.message}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return <>{people && <ListPeople peopleData={people} />}</>;
}

export default App;

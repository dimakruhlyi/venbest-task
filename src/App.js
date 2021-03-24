import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  Card,
  Typography,
  CardContent,
} from "@material-ui/core";
import { ListPeople } from "./components/ListPeople";
import { FormFiltres } from "./components/FormFilters";
import { NoPeople } from "./components/NoPeople";
import { getPeople } from "./store/actions/peopleAction";

function App() {
  const [peopleData, setPeopleData] = useState([]);
  const dispatch = useDispatch();
  const { people, loading, error } = useSelector((state) => state.peopleList);
  const { peopleFiltered } = useSelector((state) => state.filteredData);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  useEffect(() => {
    setPeopleData(people);
  }, [people]);

  useEffect(() => {
    setPeopleData(peopleFiltered);
  }, [peopleFiltered]);

  if (loading) {
    return (
      <div className={classes.alignCenter}>
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

  return (
    <>
      <FormFiltres />
      {peopleData.length === 0 ? (
        <NoPeople />
      ) : (
        peopleData && <ListPeople peopleData={peopleData} />
      )}
    </>
  );
}

export default App;

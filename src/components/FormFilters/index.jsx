import React, { useEffect, useState } from "react";
import { useStyles } from "./useStyles";
import { Box, TextField, Typography, Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  filterMale,
  filterFemale,
  filterAge,
  filterName,
  filterLastName,
} from "../../store/actions/filterAction";

export const FormFiltres = () => {
  const classes = useStyles();
  const [filterArr, setFilterArr] = useState([]);
  const { people } = useSelector((state) => state.peopleList);
  //   const { peopleFiltered, male, female } = useSelector(
  //     (state) => state.filteredData
  //   );
  const dispatch = useDispatch();

  const handleChangeMale = (event) => {
    dispatch(filterMale(people, event.target.checked));
  };

  const handleChangeFemale = (event) => {
    dispatch(filterFemale(people, event.target.checked));
  };

  const hadleAgeFilter = (e) => {
    dispatch(filterAge(people, e.target.value));
  };

  const handleNameFilter = (e) => {
    dispatch(filterName(people, e.target.value));
  };
  const handleLastNameFilter = (e) => {
    dispatch(filterLastName(people, e.target.value));
  };

  return (
    <>
      <Typography variant="h4" align="center">
        Фильтры
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <Box className={classes.textBlock}>
          <Typography variant="body1" align="center" className={classes.inline}>
            Имя:
          </Typography>
          <TextField
            label="Имя..."
            className={classes.textItem}
            onChange={(e) => handleNameFilter(e)}
          />
        </Box>
        <Box className={classes.textBlock}>
          <Typography variant="body1" align="center" className={classes.inline}>
            Фамилия:
          </Typography>
          <TextField
            label="Фамилия..."
            className={classes.textItem}
            onChange={(e) => handleLastNameFilter(e)}
          />
        </Box>
        <Box className={classes.textBlock}>
          <Typography variant="body1" align="center" className={classes.inline}>
            Возраст:
          </Typography>
          <TextField
            label="Возраст..."
            type="number"
            min="0"
            className={classes.textItem}
            onChange={(e) => hadleAgeFilter(e)}
          />
        </Box>
        <Box className={classes.textBlock}>
          <Typography variant="body1" align="center" className={classes.inline}>
            Пол:
          </Typography>
          <Typography className={`${classes.checkboxItem} ${classes.textItem}`}>
            м: <Checkbox color="default" onChange={handleChangeMale} />
            ж: <Checkbox color="default" onChange={handleChangeFemale} />
          </Typography>
        </Box>
      </form>
    </>
  );
};

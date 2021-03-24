import React, { useRef } from "react";
import { useStyles } from "./useStyles";
import { Box, TextField, Typography, Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAge,
  filterName,
  filterLastName,
  filterSex,
} from "../../store/actions/filterAction";

export const FormFiltres = () => {
  const classes = useStyles();
  const { people } = useSelector((state) => state.peopleList);
  const maleRef = useRef();
  const femaleRef = useRef();
  const dispatch = useDispatch();

  const handleChangeSex = () => {
    let maleChecked = maleRef.current.children[0].children[0].checked;
    let femaleChecked = femaleRef.current.children[0].children[0].checked;

    if (maleChecked === true && femaleChecked === false) {
      dispatch(filterSex(people, "m"));
    }
    if (maleChecked === false && femaleChecked === true) {
      dispatch(filterSex(people, "f"));
    }
    if (
      (maleChecked === true && femaleChecked === true) ||
      (maleChecked === false && femaleChecked === false)
    ) {
      dispatch(filterSex(people, "b"));
    }
  };

  const handleNameFilter = (event) => {
    dispatch(filterName(people, event.target.value));
  };

  const handleLastNameFilter = (event) => {
    dispatch(filterLastName(people, event.target.value));
  };

  const hadleAgeFilter = (event) => {
    dispatch(filterAge(people, event.target.value));
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
            м:{" "}
            <Checkbox
              color="default"
              ref={maleRef}
              onChange={handleChangeSex}
            />
            ж:{" "}
            <Checkbox
              color="default"
              ref={femaleRef}
              onChange={handleChangeSex}
            />
          </Typography>
        </Box>
      </form>
    </>
  );
};

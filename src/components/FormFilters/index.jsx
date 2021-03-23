import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./useStyles";
import { Box, TextField, Typography, Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { filterMale, filterFemale } from "../../store/actions/filterAction";

export const FormFiltres = () => {
  const classes = useStyles();
  const { people } = useSelector((state) => state.peopleList);
  //   const { peopleFiltered, male, female } = useSelector(
  //     (state) => state.filteredData
  //   );
  const dispatch = useDispatch();
  //const checkRef = useRef();

  const handleChangeMale = (event) => {
    dispatch(filterMale(people, event.target.checked));
    //console.log(checkRef.current.children[0].children[0].checked);
  };

  const handleChangeFemale = (event) => {
    dispatch(filterFemale(people, event.target.checked));
  };

  const hadleAge = () => {};

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
          <TextField label="Имя..." className={classes.textItem} />
        </Box>
        <Box className={classes.textBlock}>
          <Typography variant="body1" align="center" className={classes.inline}>
            Фамилия:
          </Typography>
          <TextField label="Фамилия..." className={classes.textItem} />
        </Box>
        <Box className={classes.textBlock}>
          <Typography variant="body1" align="center" className={classes.inline}>
            Возраст:
          </Typography>
          <TextField
            label="Возраст..."
            className={classes.textItem}
            onKeyPress={hadleAge}
          />
        </Box>
        <Box className={classes.textBlock}>
          <Typography variant="body1" align="center" className={classes.inline}>
            Пол:
          </Typography>
          <Typography className={`${classes.checkboxItem} ${classes.textItem}`}>
            м: <Checkbox color="default" onChange={handleChangeMale} />
            ж:{" "}
            <Checkbox
              color="default"
              //ref={checkRef}
              onChange={handleChangeFemale}
            />
          </Typography>
        </Box>
      </form>
    </>
  );
};

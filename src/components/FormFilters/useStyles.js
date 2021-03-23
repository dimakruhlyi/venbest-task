import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
  },
  inline: {
    width: "25%",
    paddingTop: theme.spacing(3),
    textAlign: "left",
  },
  textItem: {
    width: "25%",
  },
  checkboxItem: {
    paddingTop: theme.spacing(1.5),
  },
  textBlock: {
    marginTop: theme.spacing(2),
    margin: "0 auto",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
  },
}));

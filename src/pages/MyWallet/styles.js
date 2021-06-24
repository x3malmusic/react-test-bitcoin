import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "inherit",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  btn: {
    marginBottom: theme.spacing(3)
  }
}));

export default useStyles;
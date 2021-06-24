import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "inherit",
  },
  buttonContainer: {
    margin: "0 auto",
  },
  btn: {
    width: theme.constants.btnWidth + theme.spacing(4),
    "&:first-child": {
      marginRight: theme.spacing(3)
    },
  }
}));

export default useStyles;
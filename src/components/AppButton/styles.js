import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 24,
    textTransform: "initial",
    borderRadius: 15,
    minWidth: theme.constants.btnWidth
  }
}));

export default useStyles;
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.grey[400],
    width: "100%",
    maxWidth: theme.constants.sidebarWidth,
    color: "white",
    top: theme.constants.headerHeight
  },
  list: {
    display: "flex",
    flexDirection: "column",
  }
}));

export default useStyles;
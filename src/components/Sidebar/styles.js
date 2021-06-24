import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    maxWidth: theme.constants.sidebarWidth,
    color: "white",
    top: theme.constants.headerHeight
  },
  img: {
    marginRight: theme.spacing(3),
    transform: "scale(1.5)"
  },
  listItem: {
    paddingLeft: theme.spacing(4)
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
  },
}));

export default useStyles;
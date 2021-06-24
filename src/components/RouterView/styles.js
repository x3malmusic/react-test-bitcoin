import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    textAlign: "center",
    width: "100%",
    maxWidth: `calc(100% - ${theme.constants.sidebarWidth * 2}px)`,
    color: theme.palette.primary.main,
    fontSize: 48,
    paddingTop: theme.spacing(24)
  },
}));

export default useStyles;
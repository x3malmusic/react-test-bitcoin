import React from "react";
import { Drawer, List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { formatDate } from "../../utils";
import useStyles from "./styles";

export default function History({ messages }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      classes={{ paper: classes.drawer }}
    >
      <List>
        {!!messages.length && messages.map(({ message, date }) => (
          <React.Fragment key={formatDate(date) + Math.random()}>
            <ListItem className={classes.list}>
              <ListItemText>{formatDate(date)}</ListItemText>
              <ListItemText>{message}</ListItemText>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  )
}
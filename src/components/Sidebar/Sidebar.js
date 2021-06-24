import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import useStyles from "./styles";

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawer }}
    >
      <List>
        {routes.map(({ icon, name, path }) => (
          <NavLink to={path} className={classes.link} key={path}>
            <ListItem button className={classes.listItem}>
              <img src={icon} className={classes.img} alt="img" />
              <ListItemText primary={name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  )
}
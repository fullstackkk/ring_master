import { Drawer, List, ListItem, Typography } from "@mui/material";

import { Link, NavLink } from "react-router-dom";

function SideBar({ open, close }) {
  return (
    <Drawer anchor="left" open={open} onClose={close}>
      <List>
        <ListItem>
          <NavLink to="/" className="nav-link">
            <Typography variant="h5">Главная</Typography>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/characters" className="nav-link">
            <Typography variant="h5">Персонажи</Typography>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/movie" className="nav-link">
            <Typography variant="h5">Фильмы</Typography>
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideBar;

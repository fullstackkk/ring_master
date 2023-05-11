import {
  Drawer,
  List,
  ListItem,
  Typography,
  ImageListItem,
} from "@mui/material";
import logo from "../../assets/logo.jpeg";

import { Link, NavLink } from "react-router-dom";

function SideBar({ open, close }) {
  return (
    <Drawer anchor="left" open={open} onClose={close}>
      <List>
        <ListItem
          sx={{
            width: "200px",
            height: "200px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={logo}
          />
        </ListItem>
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

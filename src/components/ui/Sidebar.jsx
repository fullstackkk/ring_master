import { Drawer, List, ListItem, Typography } from "@mui/material";

import { Link, NavLink } from "react-router-dom";

function SideBar({ open, close }) {
  return (
    <Drawer anchor="left" open={open} onClose={close}>
      <List>
        <ListItem>
          <NavLink to="/" className="nav-link">
            <Typography variant="h5">Home</Typography>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/product" className="nav-link">
            <Typography variant="h5">Products</Typography>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/catalog" className="nav-link">
            <Typography variant="h5">Catalog</Typography>
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideBar;

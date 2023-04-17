import { Drawer, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <Drawer anchor="left" open={true}>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/product">Products</Link>
        </ListItem>
        <ListItem>
          <Link to="/catalog">Catalog</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideBar;

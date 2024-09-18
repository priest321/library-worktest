import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";

function Root() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DESI Library
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={drawerOpen} onClose={handleClose}>
        <List>
          <ListItem button component={Link} to="/home" onClick={handleClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/books" onClick={handleClose}>
            <ListItemText primary="Books" />
          </ListItem>
          <ListItem button component={Link} to="/borrow" onClick={handleClose}>
            <ListItemText primary="Borrow" />
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Root;

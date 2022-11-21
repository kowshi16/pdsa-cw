import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { styled, Typography } from "@mui/material";

const ListItemTextStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: "600",
}));

const drawerWidth = 240;
const navData = [
  // {
  //   id: "001",
  //   title: "Home",
  //   url: "/",
  // },
  {
    id: "002",
    title: "Knapsack",
    url: "/knapsack",
  },
  {
    id: "003",
    title: "Minimum connecters",
    url: "/connectors",
  },
  {
    id: "004",
    title: "Shortest Path",
    url: "/paths",
  },
];

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: 100,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{ backgroundColor: "#fff" }}>
          {navData.map((data) => (
            <ListItem
              key={data.title}
              disablePadding
              sx={{
                color: +Boolean(window.location.pathname === data.url)
                  ? "#fff"
                  : "#000",
                backgroundColor: +Boolean(window.location.pathname === data.url)
                  ? "#000"
                  : "#fff",
              }}
            >
              <ListItemButton onClick={() => navigate(data.url)}>
                <ListItemTextStyled>{data.title}</ListItemTextStyled>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={() => {
                window.localStorage.clear();
                navigate("/")
            }}>
              <ListItemTextStyled>Logout</ListItemTextStyled>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

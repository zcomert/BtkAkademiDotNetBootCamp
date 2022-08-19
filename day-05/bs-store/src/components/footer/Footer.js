import React from "react";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Paper,
} from "@mui/material";
import styles from "./style.module.css";
import { Stack } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const links = [
    {
      id: 1,
      name: "BTK",
      url: "#",
      avatar: "B",
    },
    {
      id: 2,
      name: "BTK Akademi",
      url: "#",
      avatar: "B",
    },
    {
      id: 3,
      name: "1 milyon istihdam",
      url: "#",
      avatar: "1",
    },
    {
      id: 4,
      name: "Zafer CÖMERT",
      url: "#",
      avatar: "Z",
    },
  ];

  return (
    <Grid container spacing={3} className={styles.footer}>
      <Grid item xs={12} md={3}>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <img
            alt='BTK Akademi'
            src='https://assets-btkakademi-gov-tr.akamaized.net/api/service/v1/public/51/assets/dm_logo.png?ts=1645167484961'
          ></img>
        </Stack>
      </Grid>

      <Grid item xs={12} md={3}>
        <List>
          {links.map((link) => (
            <ListItem key={link.id}>
              <ListItemAvatar>
                <Avatar sx={{ width: 24, height: 24 }}>{link.avatar}</Avatar>
              </ListItemAvatar>
              {link.name}
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={5}>3</Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Stack justifyContent={"center"} spacing={2} direction='row'>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
}

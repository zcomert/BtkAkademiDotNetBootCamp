import React from "react";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Paper,
  Typography,
} from "@mui/material";
import styles from "./style.module.css";
import { Container, Stack } from "@mui/system";
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

  const personLinks = [
    {
      id: 1,
      name: "Administrator",
      url: "#",
      avatar: "A",
    },
    {
      id: 2,
      name: "Manager",
      url: "#",
      avatar: "M",
    },
    {
      id: 3,
      name: "Lecture",
      url: "#",
      avatar: "L",
    },
    {
      id: 4,
      name: "Developers",
      url: "#",
      avatar: "D",
    },
  ];

  return (
    <>
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
          {personLinks.map((link) => {
            // destructing
            const { id, name } = link;
            return <ListItem key={id}>{name}</ListItem>;
          })}
        </Grid>

        <Grid item xs={12} md={3}>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            direction='row'
          >
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

          <Stack spacing={3}>
            <Typography sx={{ mt: 3 }} variant='caption' align='left'>
              Bilgi Teknolojileri ve İletişim Kurumu Eskişehir Yolu 10.Km No:
              276 Posta Kodu: 06530 Çankaya/Ankara
              <br />
              E-posta: destek@btkakademi.gov.tr
              <br />
              Tel: 0 (312) 294 72 00
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

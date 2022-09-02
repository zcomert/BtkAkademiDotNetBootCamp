import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function AuthorList({ bookAuthors }) {
  return (
    <List>

      { bookAuthors && bookAuthors.map((ba) => (
        <>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt={`${ba.author.firstName} ${ba.author.lastName}`}
                src={`/authors/${ba.author.authorId % 21}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`${ba.author.firstName} ${ba.author.lastName}`}
              secondary={`${ba.author.lastName.toLowerCase()}@btkakademi.gov.tr`}
            ></ListItemText>
          </ListItem>
          <Divider variant='inset' component='li' />
        </>
      ))}
    </List>
  );
}

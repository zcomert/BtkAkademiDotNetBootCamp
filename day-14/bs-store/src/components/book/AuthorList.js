import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function AuthorList({ bookAuthors }) {
  return (
    <List>
      {bookAuthors.map((ba) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt={`${ba.author.firstName} ${ba.author.lastName}`}
              src={`/authors/${ba.author.authorId % 21}.jpg`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={`${ba.author.firstName} ${ba.author.lastName}`}
          ></ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

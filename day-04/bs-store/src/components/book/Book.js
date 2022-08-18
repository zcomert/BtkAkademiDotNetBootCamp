import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Book({ book, removeBook }) {
  const navigate = useNavigate();
  return (
   
      <ListItem
        secondaryAction={
          <IconButton 
          onClick={() => removeBook(book.id)}
          edge='end' aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText 
        sx={{cursor:'pointer'}}
        onClick={() => navigate(`/books/details/${book.id}`)} > {book.title} </ListItemText>
      </ListItem>
  );
}

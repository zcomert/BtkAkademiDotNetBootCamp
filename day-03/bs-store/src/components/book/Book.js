import React from "react";
import {Link} from "react-router-dom"
import { Button, ButtonToolbar, ButtonGroup, IconButton } from 'rsuite';
import TrashIcon from '@rsuite/icons/Trash';

export default function Book({ book, removeBook }) {
  return (
    <div>
      <Link to={`/books/details/${book.id}`}>{book.title}</Link>
      <IconButton
    icon={<TrashIcon />} circle size="lg"
      onClick={() => removeBook(book.id)}></IconButton>
    </div>
  );
}

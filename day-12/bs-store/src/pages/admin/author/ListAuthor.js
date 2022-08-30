import {
  Avatar,
  Button,
  ButtonGroup,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOneAuthor,
  getAllAuthors,
} from "../../../store/actions/authorActions";

import { openSnackbar } from "../../../store/actions/appActions";

export default function ListAuthor() {
  const { authors } = useSelector((state) => state.author);
  const dispatch = useDispatch();

  const handleRemoveAuthor = (id) => {
    dispatch(deleteOneAuthor(id));
    dispatch(
      openSnackbar({
        message: "Author has been removed.",
        severity: "success",
      })
    );
  };

  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);
  return (
    <Container maxWidth='md'>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align='right'>Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors?.map((author) => (
              <TableRow>
                <TableCell>{author.authorId}</TableCell>
                <TableCell>
                  <Avatar
                    src={`/authors/${author.authorId % 21}.jpg`}
                    alt={`${author.firstName} ${author.lastName}`}
                  />
                </TableCell>
                <TableCell>{author.firstName}</TableCell>
                <TableCell>{author.lastName}</TableCell>
                <TableCell align='right'>
                  <ButtonGroup orientation='vertical'>
                    <Button>Update</Button>
                    <Button onClick={() => handleRemoveAuthor(author.authorId)}>
                      Remove
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {getOneBookWithDetails} from "../../store/actions/bookActions";

export default function BookDetails() {
  const {book} = useSelector(state => state.book);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneBookWithDetails(id));
  }, []);

  return (
    <Container sx={{ mt: 3 }} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <img src={`/books/${id}.jpg`} alt={book.title} />
            <ButtonGroup variant='outlined'>
              <Button
                
                onClick={() => navigate("/books/list")}
              >
                Go to Book List{" "}
              </Button>
              <Button>Add Cart</Button>
            </ButtonGroup>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant='h4'>{book.title}</Typography>
          <Typography sx={{ padding: 5 }} variant='body1'>
            "{book.summary}"
          </Typography>
          <Typography sx={{ color: "#f00" }} variant='h5'>
            $ {book.price}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
